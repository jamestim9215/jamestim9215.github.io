
<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const alertTitle = ref("Confirm Box");
const alertMessage = ref("無訊息");
const trueBtnText = ref("確認(Confirm)");
const falseBtnText = ref("取消(Cancel)");
const trueClass = ref("btn-outline-default");
const falseClass = ref("btn-outline-default");
const promiseStatus = ref(null);
const iconStatus = ref(0);

const show = (_title, _message, _trueBtnText, _falseBtnText,_trueClass='btn-outline-default',_falseClass='btn-outline-default', _icon=0) => {
  isOpen.value = true;
  alertTitle.value = _title?_title.replace(/\\n/g,'<br/>'):null;
  alertMessage.value = _message?_message.replace(/\\n/g,'<br/>'):null;
  trueBtnText.value = _trueBtnText;
  falseBtnText.value = _falseBtnText;
  trueClass.value=_trueClass;
  falseClass.value=_falseClass;
  iconStatus.value = _icon;
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
}

defineExpose({
  show
})



// exsample


  // confirm.value
  //     .show(
  //       t("Common.Error"),
  //       "err",
  //       t("Button.Confirm"),
  //       t("Button.Cancel"),
  //       "btn-danger btn-lg",
  //       "btn-outline-default",
  //       2,
  //     )
  //     .then(() => {
  //       // initProjectList();
  //     });

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
          iconStatus==3?'icon-warning':'',
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
        <div class="title"  :class="[
          iconStatus==1?'title-success':'',
          iconStatus==2?'title-danger':'',
          iconStatus==3?'title-warning':'',
        ]"
          v-html="alertTitle"
        >  
        </div>
        <div
          v-if="alertMessage"
          class="confirm-message"
          v-html="alertMessage"
        />
        <div class="btn-div">
          <button
            v-if="trueBtnText"
            class="btn"
            :class="trueClass"
            @click="clickHandler(true)"
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
    background-color: #333;
    max-width: 480px;
    width: calc(100% - 40px);
    border: 1px solid var(--theme-color);
    box-shadow:  0 0 30px rgba(255,255,255,0.3);
    text-align: center;
    >.icon-div{
      display: flex;
      justify-content: center;
      margin: 22px 0 22px 0;
      .material-icons-outlined{
        font-size: 66px;
        color: var(--theme-color);
      }
      &.icon-success{ 
        .material-icons-outlined{
          color: var(--theme-color);
        }
      }
      &.icon-danger{
        .material-icons-outlined{
          color: var(--theme-color-danger);
        }
      }
      &.icon-warning{
        .material-icons-outlined{
          color: var(--theme-color-warning);
        }
      }
    }
    >.title{
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 16px;
      color: var(--theme-color);
      &.title-success{
        color: var(--theme-color);
      }
      &.title-danger{
        color: var(--theme-color-danger);
      }
      &.title-warning{
        color: var(--theme-color-warning);
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
      width: 100%;
    }
  }
  .btn-div{
    margin-top: 30px;
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
