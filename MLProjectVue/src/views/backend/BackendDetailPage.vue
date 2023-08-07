<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import BackendHeader from "@/components/backend/Header.vue";
import BackendMenu from "@/components/backend/BackendMenu.vue";
import { useRouter, useRoute } from "vue-router";

import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Table from "@editorjs/table";
import Embed from '@editorjs/embed';

import FontSize from 'editorjs-inline-font-size-tool';
import Strikethrough from '@sotaproject/strikethrough';
import ColorPlugin from 'editorjs-text-color-plugin';
import YoutubeEmbed from 'editorjs-youtube-embed';
import AlignmentTuneTool  from 'editorjs-text-alignment-blocktune';

defineProps({});

const router = useRouter();
const route = useRoute();

const nowPageUrl = computed(() => {
  return route.fullPath;
});
const menu = computed(() => {
  return route.params.menu;
});
const item = computed(() => {
  return route.params.item;
});

const editerSaveData = ref({
  time: 1691318765210,
  blocks: [
    {
      id: "x5huRBwslh",
      type: "header",
      data: {
        text: "About-Us",
        level: 2,
      },
    },
    {
      id: "tJ4Xf-JpCJ",
      type: "paragraph",
      data: {
        text: "test",
      },
    },
    {
      id: "mohNtXpl_Z",
      type: "list",
      data: {
        style: "ordered",
        items: ["aaa", "bbb", "ccc"],
      },
    },
    {
      id: "KkkkusVR0O",
      type: "Table",
      data: {
        withHeadings: false,
        content: [
          ["a", "c", ""],
          ["bv", "", "s"],
        ],
      },
    },
  ],
  version: "2.27.2",
});
let editor = null;

onMounted(() => {
  editor = new EditorJS({
    holder: "editorjs",
    inlineToolbar: true,
    // readOnly: true, // Set EditorJS in read-only mode
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
        tunes: ['TextAlignment'],
      },
      list: {
        class: List,
        inlineToolbar: true,
        tunes: ['TextAlignment'],
      },
      strikethrough: {
        class: Strikethrough,
        tunes: ['TextAlignment'],
        
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
        tunes: ['TextAlignment'],
      },
      fontSize: FontSize,
      Image: {
        class: Image,
        config: {
          endpoints: {
            byFile: "http://localhost:8008/uploadFile",
            byUrl: "http://localhost:8008/fetchUrl",
          },
        },
      },
      Table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      embed: {
        class: Embed,
        inlineToolbar: true,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      },

      Color: {
        class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
        config: {
          colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
          defaultColor: '#FF1300',
          type: 'text', 
          customPicker: true // add a button to allow selecting any colour  
        }     
      },
      Marker: {
        class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
        config: {
          defaultColor: '#FFBF00',
          type: 'marker',
          icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
          }       
      },
      TextAlignment:{
        class: AlignmentTuneTool,
        inlineToolbar: true,
        // config:{
        //   default: "right",
        //   blocks: {
        //     header: 'center',
        //     list: 'right'
        //   }
        // },
      },
      youtubeEmbed: YoutubeEmbed,
    },
    onReady: () => {
      if (editerSaveData.value) {
        editor.render(editerSaveData.value);
      }
    },
  });
});
onBeforeUnmount(() => {
  if (editor) {
    editor.destroy();
    editor = null;
  }
});

const saveEditHandler = () => {
  editor
    .save()
    .then((outputData) => {
      editerSaveData.value = outputData;
      console.log("Article data: ", outputData);
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
};
</script>
<template>
  <BackendHeader />
  <div class="content-div">
    <BackendMenu />
    <div class="backend-content">
      <div class="bread-crumbs-div" v-if="item">
        <!-- <span class="bread-crumbs">{{menu}}</span> -->
        <span class="bread-crumbs">{{ item }}</span>
        <span class="bread-crumbs">Edit</span>
      </div>
      <div style="display: flex; margin-bottom:10px">
        <div style="width: 100%">
          <button class="btn btn-lg btn-color-1" @click="router.go(-1)">back</button>
        </div>
        <div style="width: 100%;text-align: right">
          <button class="btn btn-lg btn-color-2-full">Save</button>
        </div>
      </div>
      <div class="edit-div">
        <div class="content-box">
          <div class="input-div">
            <label for=""> Title </label>
            <input type="text" />
          </div>
          <div class="input-div">
            <label for=""> Image </label>
            <input type="file" accept=".jpg,.jpeg,.png" />
          </div>
          <div class="input-div">
            <label for=""> Content </label>
            <textarea name="" id="" rows="5"></textarea>
          </div>
          <div class="input-div">
            <label for="">
              Body
              <button @click="saveEditHandler" class="btn btn-color2">
                Save
              </button></label
            >
            <div id="editorjs"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-div {
  display: flex;
}

.bread-crumbs-div {
  position: relative;
  width: 100%;
  // margin-top: 10px;
  .bread-crumbs {
    display: inline-block;
    font-size: 24px;
    color: var(--theme-color-2);
    text-transform: capitalize;
    &::after {
      content: "/";
      color: #ccc;
      margin: 0 10px;
    }
    &:nth-last-child(1) {
      color: #ccc;
      font-size: 20px;
      &::after {
        content: "";
        margin: 0;
      }
    }
  }
}

.backend-content {
  position: relative;
  display: block;
  vertical-align: top;
  width: calc(100% - 300px);
  height: calc(100vh - 40px);
  overflow-x: hidden;
  overflow-y: auto;
  background: #f1f3f2;
  padding: 0 10px;
}
.title {
  color: var(--theme-color-2);
  font-size: 18px;
  font-weight: 300;
  margin: 10px 0 0 0;
}
.content-box {
  background: var(--theme-color-2-02);
  position: relative;
  display: block;
  height: auto;
  padding: 20px 10px 10px 10px;
  border: 1px solid var(--theme-color-2-05);
  margin: 0 0 10px 0;
  // border-radius: 5px;
  .content-title {
    position: absolute;
    top: 0px;
    left: 4px;
    font-size: 14px;
    color: var(--theme-color-2);
  }
}
@media (max-width: 768px) {
}
</style>
