<script setup>
import { ref } from "vue";
import Card from "./components/Card.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc 
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkBG_WGNQRaaQVnPOvolvdy8eAXVPtMDo",
  authDomain: "note-d549b.firebaseapp.com",
  projectId: "note-d549b",
  storageBucket: "note-d549b.appspot.com",
  messagingSenderId: "381280428927",
  appId: "1:381280428927:web:69b4c78f9d65dca937704a",
  measurementId: "G-KPNSMZP8X7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const dbUrl = "Note";

const DataList = ref({});

const getRandom = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const getPos = () => {
  var deg = (Math.round(Math.random()) * 2 - 1) * getRandom(0, 15);
  var w = window.innerWidth;
  var h = window.innerHeight;
  var left = getRandom(15, w - 400) ;
  var top = getRandom(15, h - 300) ;
  let pos = {
    X: left,
    Y: top,
    Deg: deg
  };
  return pos;
};
const AddNote = async (data) => {
  try {
    const docRef = await addDoc(collection(db, dbUrl), data);

    // console.log("Document written with ID: ", docRef.id);
    closeNewCardHandler()
  } catch (e) {
    console.error("Error adding document: ", e);
    // if(e.match('ImageBase64')){
      alert('圖片太大張了')
    // }

  }
};

const ReadNote = async () => {
  const querySnapshot = await getDocs(collection(db, dbUrl));
  querySnapshot.forEach((doc) => {
    let _data = {
      id: doc.id,
      data: doc.data(),
    };
    // console.log(`${doc.id} => ${doc.data()}`);
    DataList.value[doc.id] = doc.data();
  });
};
const DeleteNote = async (key) => {
  await deleteDoc(doc(db, dbUrl, key));
};

const unsubscribe = onSnapshot(collection(db, dbUrl), (data) => {
  DataList.value = {};
  data.docs.forEach((doc) => {
    DataList.value[doc.id] = doc.data();
  });
});

ReadNote();

// 使用FileReader讀取檔案，並且回傳Base64編碼後的source
const convertFile = (file) => {
  return new Promise((resolve, reject) => {
    // 建立FileReader物件
    let reader = new FileReader();
    // 註冊onload事件，取得result則resolve (會是一個Base64字串)
    reader.onload = () => {
      resolve(reader.result);
    };
    // 註冊onerror事件，若發生error則reject
    reader.onerror = () => {
      reject(reader.error);
    };
    // 讀取檔案
    reader.readAsDataURL(file);
  });
};
const previewImg = ref("");
const choosedColor = ref(2);
const CardName = ref("");
const CardContent = ref("");

// 預覽圖片，將取得的files一個個取出丟到convertFile()
const previewFiles = (file) => {
  convertFile(file)
    .then((data) => {
      // console.log(data); // 把編碼後的字串輸出到console
      if(data.length > 1048487) {
        alert('圖片檔案太大了!換一張!');
        document.getElementById('imgFile').value = '';
      }else{
        previewImg.value = data;
      }
      
    })
    .catch((err) => console.log(err));
};
const changeUploadImage = (e) => {
  if (e.target.files.length > 0) previewFiles(e.target.files[0]);
};

const openNewCardHandler = () => {
  document.getElementById("add-card-cover").classList.add("active");
};
const closeNewCardHandler = () => {
  document.getElementById("add-card-cover").classList.remove("active");
  
  previewImg.value = '';
  choosedColor.value = 2;
  CardName.value = '';
  CardContent.value = '';
};

const pad = (v) => {
  return (v<10)?'0'+v:v
}

const getDateString = (d) => {
  let year = d.getFullYear()
  let month = pad(d.getMonth()+1)
  let day = pad(d.getDate())
  let hour = pad(d.getHours())
  let min = pad(d.getMinutes())
  let sec = pad(d.getSeconds())
  //YYYY-MM-DD hh:mm:ss
  return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec
  
}

const addNewCardHandler = () => {
  var date = new Date();
  let data = {
    Name: CardName.value,
    Content:  CardContent.value,
    ImageBase64: previewImg.value,
    Color : choosedColor.value,
    Date: getDateString(date),
    Pos: getPos(),
  }
  AddNote(data);
};

const xPos = ref(0)
const yPos = ref(0)
const isClick = ref(false)
const cardkey = ref('')
const _xPos = ref(0)
const _yPos = ref(0)



const UpdateNote = async (key) =>{
  const washingtonRef = doc(db, dbUrl, key);

  await updateDoc(washingtonRef, DataList.value[key]);
}


const mousedown = (event,item,key) => {
  isClick.value = true;
  cardkey.value = key;
  xPos.value = event.clientX;
  yPos.value  = event.clientY;
  _xPos.value = event.clientX - item.Pos.X;
  _yPos.value = event.clientY - item.Pos.Y;

  console.log(xPos.value,yPos.value,_xPos.value,_yPos.value);
}

const mousemove = (event) => {
  xPos.value = event.clientX;
  yPos.value  = event.clientY;
  if(isClick.value){
    DataList.value[cardkey.value].Pos.X = xPos.value - _xPos.value;
    DataList.value[cardkey.value].Pos.Y = yPos.value - _yPos.value;
  }
    
  // console.log(xPos.value,yPos.value,item.Pos);
}

const mouseup = () => {
  isClick.value = false;
  UpdateNote(cardkey.value);
}

const mouseupOther = () => {
  isClick.value = false;

  UpdateNote(cardkey.value);
}

</script>

<template>
  <Card
    v-for="(item, key) in DataList"
    :key="key"
    :card-key="key"
    :card-info="item"
    @mousedown="mousedown($event,item,key)"
    @mouseup="mouseup"
    @mousemove="mousemove"
  >
    <div class="delbtn" @click="DeleteNote(key)"></div>
  </Card>

  <div class="add-card-cover" id="add-card-cover"
    @mousemove="mousemove"
    @mouseup="mouseupOther">
    <div class="add-card-div">
      <div class="closeBtn" @click="closeNewCardHandler()"></div>
      <div>
        暱稱
        <input type="text" v-model="CardName" maxlength="50"/>
      </div>
      <div>
        內容
        <input type="text" v-model="CardContent"  />
      </div>
      <div>
        圖片<br />
        <div style="text-align: center">
          <img :src="previewImg" alt="" />
        </div>
        <label for="imgFile" class="imgUploadBtn">
          <input
            type="file"
            id="imgFile"
            style="display: none"
            accept="image/png, image/jpeg, .gif"
            @change="changeUploadImage"
          />
          上傳
        </label>
      </div>
      <div>
        便條顏色
        <div class="chooseColorDiv">
          <label for="color01">
            <input
              type="radio"
              name="cardColor"
              id="color01"
              @click="choosedColor = 1"
              :checked="choosedColor === 1"
            />
          </label>
          <label for="color02">
            <input
              type="radio"
              name="cardColor"
              id="color02"
              @click="choosedColor = 2"
              :checked="choosedColor === 2"
            />
          </label>
          <label for="color03">
            <input
              type="radio"
              name="cardColor"
              id="color03"
              @click="choosedColor = 3"
              :checked="choosedColor === 3"
            />
          </label>
          <label for="color04">
            <input
              type="radio"
              name="cardColor"
              id="color04"
              @click="choosedColor = 4"
              :checked="choosedColor === 4"
            />
          </label>
          <label for="color05">
            <input
              type="radio"
              name="cardColor"
              id="color05"
              @click="choosedColor = 5"
              :checked="choosedColor === 5"
            />
          </label>
        </div>
      </div>
      <div style="text-align: center;margin:0">
        <button class="addCardBtn" @click="addNewCardHandler()">新增</button>
      </div>
    </div>
  </div>

  <button class="addBtn" @click="openNewCardHandler()"></button>
</template>

<style lang="scss" scoped>
.delbtn {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 10;
  right: 5px;
  top: 5px;
  opacity: 0.3;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 3px;
    top: 50%;
    left: 50%;
    background: #000;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    transform: rotate(180deg);
  }
}

.addBtn {
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 60px;
  height: 60px;
  background: #242424;
  border: 2px solid #555;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 5px;
    top: 50%;
    left: 50%;
    background: #555;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:hover {
    border: 2px solid #666;
  }
}
.add-card-cover {
  position: fixed;
  z-index: -10;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: 0.3s ease-in-out;
  &.active {
    z-index: 1;
    opacity: 1;
  }
  overflow: auto;
}
.add-card-cover.active .add-card-div {
  top: 50%;
}
.add-card-div {
  position: absolute;
  width: calc(100% - 30px);
  max-width: 400px;
  height: auto;
  min-height: 200px;
  background: #333;
  padding: 15px;
  left: 50%;
  top: -100%;
  transition: 0.5s all;
  transform: translate(-50%, -50%);
  .closeBtn {
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 10;
    right: 5px;
    top: 5px;
    opacity: 0.3;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 3px;
      top: 50%;
      left: 50%;
      background: #fff;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover {
      transform: rotate(180deg);
    }
  }
  > div {
    margin-bottom: 15px;

    input {
      position: relative;
      display: block;
      width: calc(100% - 20px);
      border: 1px solid #333;
      background: #242424;
      color: #fff;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
    .imgUploadBtn {
      position: relative;
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #242424;
      cursor: pointer;
    }
    img {
      max-width: 100%;
      border-radius: 10px;
    }
    .chooseColorDiv {
      position: relative;
      display: flex;
      justify-content: space-between;
      label {
        width: 70px;
        height: 30px;
        input {
          position: absolute;
          top: 3px;
          width: 20px;
          height: 20px;
        }
        &:nth-child(1) {
          background: var(--theme-red);
        }
        &:nth-child(2) {
          background: var(--theme-yellow);
        }
        &:nth-child(3) {
          background: var(--theme-green);
        }
        &:nth-child(4) {
          background: var(--theme-blue);
        }
        &:nth-child(5) {
          background: var(--theme-purple);
        }
      }
    }
  }
  .addCardBtn {
    margin-top: 15px;
    position: relative;
    width: 120px;
    border: 1px solid var(--theme-yellow);
    background: #242424;
    border-radius: 5px;
    color: var(--theme-yellow);
    transition: 0.3s ease-in-out;
    cursor: pointer;
    height: 40px;
    &:hover {
      background: var(--theme-yellow);
      color: #333;
    }
  }
}
</style>
