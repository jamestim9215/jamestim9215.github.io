<template>
  <div>
    <editor v-model="content" />

    <div class="content">
      <h3>HTML CODE</h3>
      <div>
        <!-- <button class="typeBtn" :class="type==1?'active':''" @click="type=1">Html Code</button> -->
        <!-- <button class="typeBtn" :class="type==2?'active':''" @click="type=2">Json file Html Code</button> -->
        <h4>Output</h4>
        <pre v-if="type==1" ><code>{{ content }}</code></pre>
        <!-- <pre v-if="type==2"><code>{{ gen(content) }}</code></pre> -->
        <!-- <h4>Input</h4>
        <textarea  @change="inputContent()" style="width:100%"  id="inputContent" rows="20" :value="content"></textarea> -->
      </div>
    </div>
  </div>
</template>

<script>
import Editor from './components/Editor'

export default {
  components: {
    Editor,
  },

  data() {
    return {
      type: 1,
      content: "<h1>Hi</h1><p>This is Ray's \"Tiptap editor\" example!</p>",
      
    }
  },
  methods: {
    // gen(content){
    //   var str = content;
      // str = str.replace(/"/g, '\\"');
      // str = str.replace(/'/g, "**'");
    //   return str;
    // },
    // inputContent(){
    //   var str = document.getElementById('inputContent').value
      // str = str.replace(/\**'/g, "'");
      // str = str.replace(/\\"/g, '"');
      // str = str.replace(/\\'/g, "'");
      // str = str.replace(/\r\n|\n/g,"");
    //   this.content = str;
    // }
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
    padding: 1rem 0 0;

    h3 {
      margin: 1rem 0 0.5rem;
    }

    pre {
      border-radius: 5px;
      color: #ccc;
    }

    code {
      display: block;
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
  background: #333;
  color: #fff;
}
.typeBtn:hover{
  background: #000;
  border-radius: 0;
}
.typeBtn.active{
  background: #ff6400;
  border-radius: 0;
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
</style>