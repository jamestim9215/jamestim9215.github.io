
<script setup>
import { ref } from "vue";

defineProps({
  title:{
    type:String,
    default:"Confirm Box"
  },
});

const isOpen = ref(false);
const message = ref("無訊息");
const trueMessage = ref("確認(Confirm)");
const falseMessage = ref("取消(Cancel)");
const trueClass = ref("outline-primary");
const falseClass = ref("outline-dark");
const promiseStatus = ref(null);

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
const show = (_message, _trueMessage, _falseMessage,_trueClass='outline-primary',_falseClass='outline-dark',_checkText) => {
  isOpen.value = true;
  message.value = _message;
  trueMessage.value = _trueMessage;
  falseMessage.value = _falseMessage;
  trueClass.value=_trueClass;
  falseClass.value=_falseClass;
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
        <div class="title">
          {{ title }}
        </div>
        <slot />
        <div
          v-if="!$slots.default"
          class="confirm-message"
          v-html="message"
        />
        <div class="input-div">
          <input type="text" v-model="inputText" @keyup="inputCheck()" @change="inputCheck()">
        </div>
        <div class="btn-div">
          <button
            v-if="trueMessage"
            class="btn"
            :class="'btn-'+trueClass"
            @click="clickHandler(true)"
            :disabled="canClickTrue"
          >
            {{ trueMessage }}
          </button>
          <button
            v-if="falseMessage"
            class="btn btn-"
            :class="'btn-'+falseClass"
            @click="clickHandler(false)"
          >
            {{ falseMessage }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
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
    top: 200px;
    left: 50%;
    padding: 0.75rem 1rem;
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    background-color: #fff;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #dee2e6;
    box-shadow:  0 0 10px rgba(0,0,0,0.5);
    >.title{
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  .confirm-message {
    min-height: 50px;
  }
  .input-div{
    margin-top: 10px;
    input{
      width: 100%;
    }
  }
  .btn-div{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    button{
      
    }
    button + button{
      margin-left: 10px;
    }
  }
}
</style>
