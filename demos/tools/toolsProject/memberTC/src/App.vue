<template>
  <div>
    <h1 style="text-align:center;color:#999;font-family: 'aldrich'">
      GIGABYTE / AORUS WARRANTY TERMS AND CONDITIONS Editor
    </h1>
    <div class="editor-div">
      <editor :value="content" @input="inputFun" :editLang="lang" />
    </div>
    <div class="content-div">
      <div class="content">
        <h4 style="color:#ff6400">Step 1 : Upload Member json file</h4>
        <label for="uploadJson" class="uploadBtn" >
          <input type="file" name="uploadJson" id="uploadJson" accept="application/json" @change="uploadJson" style="display:none">
          <span id="uploadBtnText">Upload</span>
        </label>

        

        <div v-if="memberData">
          <h4 style=";color:#ff6400">Step 2 : Select and edit domain</h4>
          <button v-for="(key,data,index) in memberData" :key="index" @click="initDataFromLang(key.data,data);" :style="lang==data?'background: #ff6400':''">{{data}}</button>
          

        </div>
        <div v-if="memberData && lang">
          <h4 style="color:#ff6400">Step 3 : Download member json file</h4>
          <button class="uploadBtn" style="width:100%" @click="downloadFile()">DownLoad</button>
        </div>

        <br>
        <hr style="border-bottom: 1px solid #666; margin: 15px 0">
        <div>
          <h4 style="color:#ff6400" @click="other?other=false:other=true">Other Setting</h4>
          
          <div v-show="other">
            <button v-if="lang"  @click="lang='';content=''">CLEAR</button>
            <br v-if="lang">
            <input type="checkbox" name="" id="changeWrrantytableClass" :checked="isWarrantytableClass" @change="changeWrrantytableClass"><label>Warrantytable Class for table</label>
            
            <h5 style="color:#999;margin: 10px 0 5px 0;">Html Code Input</h5>
            <textarea  @change="inputContent()" style="width:100%"  id="inputContent" rows="10" :value="content"></textarea>

          
            <div v-if="content">
              <h5 style="color:#999;margin: 10px 0 5px 0;">Generate Output</h5>
              <button class="typeBtn" :class="type==1?'active':''" @click="type=1">Html Code</button>
              <button class="typeBtn" :class="type==2?'active':''" @click="type=2">Json Code</button>
              <div style="position: relative">
                <button class="copyBtn" @click="copyToClipBoard(type)"><i class="fas fa-clone"></i></button>
                <textarea v-if="type==1" style="width:100%"  id="outputContent1" rows="10" :value="gen(content)" readonly></textarea>
                <textarea v-if="type==2" style="width:100%"  id="outputContent2" rows="10" :value="genJson(content)" readonly></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Editor from './components/Editor'

// import memberTCData from './assets/json/data.json';
// import memberTCData from './assets/json/member_T&C_data.json';

export default {
  components: {
    Editor,
  },
  computed: {
    // memberData() {
    //   return memberTCData;
    // }
  },
  mounted(){
    // console.log(this.memberData);
  },
  data() {
    return {
      type: 1,
      lang: '',
      isWarrantytableClass: true,
      memberData: null,
      other: false,

      content: ``,
      // content: '<h1><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.aorus.com/"><span style="font-family: AORUS">AORUS</span></a><span style="font-family: AORUS"> Text Editor</span></h1><p><span style="font-family: TitilliumWeb">power by Ray01.lin</span></p>',
    }
  },
  watch:{
    content(){
      for(var key in this.memberData){
        if(key == this.lang){
          // console.log(this.lang + " - " + key);
          this.memberData[key].data = this.genJson(this.content);
          break;
        }
      }
    }
  },
  methods: {
    inputFun(i){
      for(var key in this.memberData){
        if(key == this.lang){
          console.log(this.lang + " - " + key);
          this.memberData[key].data = this.genJson(i);
          break;
        }
      }
    },
    gen(content){
      var str = content;
      if(!this.lang.match(/tab/) || this.isWarrantytableClass==true){
        str = str.replace(/<table>/,"<div class=\"table-responsive\"><table class=\"warrantytable\">");
      }
      str = str.replace(/<table>/g,"<div class=\"table-responsive\"><table>");
      str = str.replace(/<\/table>/g,"</table></div>");

      str = str.replace(/'/g, "\\'");
      return str;
    },
    genJson(content){
      var str = content;
      if(!this.lang.match(/tab/) || this.isWarrantytableClass==true){
        str = str.replace(/<table>/,"<div class=\"table-responsive\"><table class=\"warrantytable\">");
      }
      str = str.replace(/<table>/g,"<div class=\"table-responsive\"><table class=\"warrantytable\">");
      str = str.replace(/<\/table>/g,"</table></div>");
      
      str = str.replace(/"/g, '\\"');
      str = str.replace(/'/g, "**'");

      return str;
    },
    inputContent(){
      var str = document.getElementById('inputContent').value;
      str = str.replace(/<div class="table-responsive"><div class="table-responsive"><table class="warrantytable">/g,"<table>");
      str = str.replace(/<div class="table-responsive"><table class="warrantytable">/g,"<table>");
      str = str.replace(/<div class="table-responsive"><table>/g,"<table>");
      str = str.replace(/<\/table><\/div><\/div><\/div>/g,"</table>");
      str = str.replace(/<\/table><\/div><\/div>/g,"</table>");
      str = str.replace(/<\/table><\/div>/g,"</table>");
      str = str.replace(/<table class="warrantytable">/g,"<table>");
      
      str = str.replace(/\**'/g, "'");
      str = str.replace(/\\"/g, '"');
      str = str.replace(/\\'/g, "'");
      str = str.replace(/\r\n|\n/g,"");

      this.content = str;
      
      // this.lang = '';
    },
    downloadFile(){
      var _data = JSON.parse(JSON.stringify(this.memberData));
      console.log(_data['global'].data);
      for(var key in _data){
        var str = _data[key].data;
        str = str.replace(/\\"/g, '"');
        str = str.replace(/\\'/g, "'");
        _data[key].data = str;
      }
      const data = JSON.stringify(_data);
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "member_TC_data.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },

    initDataFromLang(data,lang){
      // console.log(data);
      console.log(lang);
      document.getElementById('inputContent').value = data;
      this.inputContent();
      this.lang=lang;
      if(this.lang.match(/tab/)){
        this.isWarrantytableClass = false;
      }else{
        this.isWarrantytableClass = true;
      }
      
    },
    uploadJson(event){
      var files = event.target.files;
      console.log(files[0]);
      this.memberData = null;
      this.lang = '';
      if(files[0]){
        document.getElementById("uploadBtnText").innerText = files[0].name;
        this.readFile(files[0]);
      }else{
        document.getElementById("uploadBtnText").innerText = "Upload";
      }
    },
    readFile(file) {
      var _this = this;
      let reader = new FileReader();
      reader.onload = e => {
        let json = JSON.parse(e.target.result);
        _this.memberData = json;
      };
      reader.readAsText(file);
    },
    copyToClipBoard(type) {
      
      var content = document.getElementById('outputContent'+type);
      var text = content.select();
      console.log(text);
      document.execCommand('copy');
      alert("Copied!");
    },

    changeWrrantytableClass(){
      var value = document.getElementById('changeWrrantytableClass').checked;
      this.isWarrantytableClass = value;
    }

  }
}
</script>

<style lang="scss" scoped>

::v-deep {
  /* Basic editor styles */
  .ProseMirror {
    > * + * {
      margin-top: 0.75em;
    }

    code {
      background-color: rgba(#000, 0.8);
      color: #616161;
    }
  }

  .content {
    padding:  0 0;

    h3 {
      margin: 1rem 0 0.5rem;
    }

    pre {
      border-radius: 5px;
      color: #ccc;
    }

    code {
      position: relative;
      display: block;
      vertical-align: top;
      min-height: 100px;
      white-space: pre-wrap;
      font-size: 0.8rem;
      padding: 0.75rem 1rem;
      background-color:#666;
      color: #ccc;
    }
  }
}
.typeBtn{
  position: relative;
  display: inline-block;
  width: auto;
  padding: 15px;
  height: auto;
  background: #666;
  border-radius: 5px;
  color: #fff;
}
.typeBtn:hover{
  background: #ff6400;
}
.typeBtn.active{
  background: #ff6400;
}

.editor-div{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: calc(60% - 20px);
  padding: 10px;
  height: auto;
}
.content-div{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: calc(40% - 20px);
  padding: 10px;
  height: auto;
}

textarea{
  background: #1d1d1d;
  color: #fff;
}

button{
  position: relative;
  display: inline-block;
  width: auto;
  // min-width: 70px;
  margin: 0 5px 5px 0;
  background: #666;
  border-radius: 5px;
  cursor: pointer;
  padding: 6px 12px;
  height: auto;
}

button:hover{
  background: #ff6400;
}

.copyBtn{
  position: absolute;
  right: 0;
  top: 10px;
  background: #666;
}
.copyBtn:hover{
  background: #555;
}

.uploadBtn{
  position: relative;
  display: block;
  padding: 8px 12px;
  background: #666;
  color: #fff;
  font-family: 'TitilliumWeb',sans-serif;
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;
  text-align: center;
}
.uploadBtn:hover{
  background: #ff6400;
}

@font-face {
    font-family: 'AORUS';
    src: url('./assets/fonts/AORUS.woff');
    font-display: swap;
}

@font-face {
  font-family: 'Aldrich';
  src: url('./assets/fonts/Aldrich-Regular.ttf');
  font-display: swap;
}

@font-face {
    font-family: 'TitilliumWeb';
    src: url('./assets/fonts/TitilliumWeb-Regular.ttf');
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/Roboto-Regular.ttf');
    font-display: swap;
}
@media (max-width: 1920px) {
  .editor-div{
    width: calc(70% - 20px);
  }
  .content-div{
    width: calc(30% - 20px);
  }
  
}
@media (max-width: 1400px) {
  .editor-div{
    width: calc(80% - 20px);
  }
  .content-div{
    width: calc(20% - 20px);
  }
  
}
</style>