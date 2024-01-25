
<script setup>
import { ref } from "vue";

defineProps({
  title:{
    type:String,
    default:"Confirm Box"
  },
});

const isOpen = ref(false);
const alertTitle = ref("Confirm Box");
const alertMessage = ref("無訊息");
const trueBtnText = ref("確認(Confirm)");
const falseBtnText = ref("取消(Cancel)");
const trueClass = ref("btn-outline-default");
const falseClass = ref("btn-outline-default");
const promiseStatus = ref(null);
const iconStatus = ref(0);

const canClickTrue = ref(true);
const inputText = ref('');
const checkText = ref(null);

const inputCheck = () => {
  if(inputText.value == checkText.value){
    console.log("OK");
    canClickTrue.value = false;
  }else{
    console.log("NO");
    canClickTrue.value = true;
  }
}
const show = (_title, _message, _trueBtnText, _falseBtnText,_trueClass='btn-outline-default',_falseClass='btn-outline-default', _icon=0 ,_checkText) => {
  
  isOpen.value = true;
  alertTitle.value = _title?_title.replace(/\\n/g,'<br/>'):null;
  alertMessage.value = _message?_message.replace(/\\n/g,'<br/>'):null;
  trueBtnText.value = _trueBtnText;
  falseBtnText.value = _falseBtnText;
  trueClass.value=_trueClass;
  falseClass.value=_falseClass;
  iconStatus.value = _icon;
  checkText.value = _checkText;
  return new Promise((resolve, reject) => {
    promiseStatus.value = { resolve, reject };
  });
}
const clickHandler = (action) => {
  isOpen.value = false;
  if (action) {
    promiseStatus.value && promiseStatus.value.resolve();
  } else {
    promiseStatus.value && promiseStatus.value.reject();
  }
  inputText.value = '';
}

// Compiler macros, such as defineExpose, don't need to be imported
defineExpose({
  show
})

</script>

<template>
  <transition name="slide-fade">
    <div
      v-if="isOpen"
      class="confirm-cover"
    >
      <div class="confirm shadow">
        <div class="icon-div" :class="[
          iconStatus==1?'icon-success':'',
          iconStatus==2?'icon-danger':'',
          iconStatus==3?'icon-warning':''
        ]" v-if="iconStatus!=0">
          <span class="material-icons-outlined" v-if="iconStatus==1">
          check_circle
          </span>
          <span class="material-icons-outlined" v-if="iconStatus==2">
          cancel
          </span>
          <span class="material-icons-outlined" v-if="iconStatus==3">
          report_problem
          </span>
        </div>
        <div class="title"  
          :class="[
          iconStatus==1?'title-success':'',
          iconStatus==2?'title-danger':'',
          iconStatus==3?'title-warning':''
        ]"
          v-html="alertTitle"
        >
        </div>
        <slot />
        <div
          v-if="alertMessage"
          class="confirm-message"
          v-html="alertMessage.replace(/\n/g,'<br/>')"
        />
        <div class="input-div">
          <input type="text" v-model="inputText" @keyup="inputCheck()" @change="inputCheck()">
        </div>
        <div class="btn-div">
          <button
            v-if="trueBtnText"
            class="btn"
            :class="trueClass"
            @click="clickHandler(true)"
            :disabled="canClickTrue"
          >
            {{ trueBtnText }}
          </button>
          <button
            v-if="falseBtnText"
            class="btn"
            :class="falseClass"
            @click="clickHandler(false)"
          >
            {{ falseBtnText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.confirm-cover {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  font-size: 16px;
  .confirm {
    position: absolute;
    top: 50px;
    padding: 16px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    max-width: 480px;
    border-radius: 5px;
    width: calc(100% - 40px);
    border: 1px solid var(--bs-light);
    box-shadow:  0 0 30px rgba(255,255,255,0.3);
    text-align: center;
    >.icon-div{
      display: flex;
      justify-content: center;
      margin: 22px 0 22px 0;
      .material-icons-outlined{
        font-size: 66px;
        color: var(--bs-primary);
      }
      &.icon-success{ 
        .material-icons-outlined{
          color: var(--bs-primary);
        }
      }
      &.icon-danger{
        .material-icons-outlined{
          color: var(--bs-danger);
        }
      }
      &.icon-warning{
        .material-icons-outlined{
          color: var(--bs-warning);
        }
      }
    }
    >.title{
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 16px;
      color: var(--bs-primary);
      &.title-success{
        color: var(--bs-primary);
      }
      &.title-danger{
        color: var(--bs-danger);
      }
      &.title-warning{
        color: var(--bs-warning);
      }
    }
  }
  .confirm-message {
    // min-height: 50px;
    font-size: 16px;
  }
  .input-div{
    margin-top: 10px;
    input{
      width: calc(100% - 22px);
    }
  }
  .btn-div{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    button + button{
      margin-left: 10px;
    }
  }
}
</style>
