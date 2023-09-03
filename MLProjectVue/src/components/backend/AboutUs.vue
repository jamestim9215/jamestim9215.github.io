<script setup>
import { ref, computed ,onMounted,onBeforeUnmount} from "vue";
import { useRouter, useRoute } from "vue-router";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Table from "@editorjs/table";

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

const detail = computed(() => {
  return route.params.detail;
});


const editerSaveData = ref({
    "time": 1691318765210,
    "blocks": [
        {
            "id": "x5huRBwslh",
            "type": "header",
            "data": {
                "text": "About-Us",
                "level": 2
            }
        },
        {
            "id": "tJ4Xf-JpCJ",
            "type": "paragraph",
            "data": {
                "text": "test"
            }
        },
        {
            "id": "mohNtXpl_Z",
            "type": "list",
            "data": {
                "style": "ordered",
                "items": [
                    "aaa",
                    "bbb",
                    "ccc"
                ]
            }
        },
        {
            "id": "KkkkusVR0O",
            "type": "Table",
            "data": {
                "withHeadings": false,
                "content": [
                    [
                        "a",
                        "c",
                        ""
                    ],
                    [
                        "bv",
                        "",
                        "s"
                    ]
                ]
            }
        }
    ],
    "version": "2.27.2"
});
let editor = null;

onMounted(() => {
  editor = new EditorJS({
    holder: 'editorjs',
    inlineToolbar: true,
    // readOnly: true, // Set EditorJS in read-only mode
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
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
  editor.save().then((outputData) => {
    editerSaveData.value = outputData;
    console.log('Article data: ', outputData)
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
};

</script>
<template>
  <div class="account-div">
    <div class="text-right pb-2">
      <button class="btn btn-color-2">Save</button>
    </div>
    <div class="content-box">
      <div class="input-div">
        <label for=""> Image </label>
        <input type="file" accept=".jpg,.jpeg,.png" />
      </div>
      <div class="input-div">
        <label for=""> Content <button @click="saveEditHandler" class="btn btn-color2">Save</button></label>
        <div id="editorjs"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account-div {
  position: relative;
  width: 100%;
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

@media (max-width: 960px) {
}
</style>
