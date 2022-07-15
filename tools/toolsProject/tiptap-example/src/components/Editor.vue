<template>
  <div>
    <div class="windowBoxCover" :class="addImageStatus?'active':''">
      <div class="windowBox">
        <h3>Add Image</h3>
        <button class="type" :class="addImageType==1?'active':''" @click="addImageType=1">Add image from URL</button>
        <button class="type" :class="addImageType==2?'active':''" @click="addImageType=2">Upload image</button>
        <div>
          <input v-show="addImageType==1" type="text" id="addImageInputUrl" @change="imageView">
          <label for=""  v-show="addImageType==2">
            <input type="file" name="" id="addImageInputFile" @change="imageUploadFile">
          </label>
          <img width="100%" id="addImageSrc" src="" alt="">
        </div>
        <div style="text-align:right;">
          <button class="submitBtn" @click="submitImage()">Add</button>
          <button class="cancelBtn" @click="addImageStatus=false">Cancel</button>
        </div>
      </div>
    </div>

    <div class="editor-tool-div" v-if="editor">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" title="Bold">
        <i class="fas fa-bold"></i>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" title="Italic">
        <i class="fas fa-italic"></i>
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }" title="strike">
        <i class="fas fa-strikethrough"></i>
      </button>
      <button @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }" title="highlight">
        <i class="fas fa-highlighter"></i>
      </button>
      <div class="editor-line-div">|</div>
      <div class="editor-select-div">
        <i class="fas fa-heading"></i>
        <div>
          <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" title="h1">
            <h1>Heading 1</h1>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" title="h2">
            <h2>Heading 2</h2>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" title="h3">
            <h3>Heading 3</h3>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }" title="h4">
            <h4>Heading 4</h4>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }" title="h5">
            <h5>Heading 5</h5>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }" title="h6">
            <h6>Heading 6</h6>
          </button>
        </div>
      </div>
      <div class="editor-select-div">
        <i class="fas fa-font"></i>
        <div>
          <!-- <button @click="editor.isActive('textStyle', { fontFamily: 'AORUS' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('AORUS').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'AORUS' }) }">
            <span style="font-family: 'AORUS'">AORUS</span>
          </button> -->
          <button @click="editor.isActive('textStyle', { fontFamily: 'Aldrich' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('Aldrich').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Aldrich' }) }">
            <span style="font-family: 'Aldrich'">Aldrich</span>
          </button>
          <button @click="editor.isActive('textStyle', { fontFamily: 'Roboto' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('Roboto').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Roboto' }) }">
            <span style="font-family: 'Roboto'">Roboto</span>
          </button>
          <button @click="editor.isActive('textStyle', { fontFamily: 'Microsoft JhengHei' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('Microsoft JhengHei').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Microsoft JhengHei' }) }">
            <span style="font-family: 'Microsoft JhengHei'">Microsoft JhengHei</span>
          </button>
          
        </div>
      </div>
      <div class="editor-select-div">
        <i class="fas fa-tint"></i>
        <div>
          <button class="colorBtn" style="color: #ff6400" @click="editor.isActive('textStyle', { color: '#FF6400' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#FF6400').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#FF6400' })}">
            #FF6400
          </button>
          <button class="colorBtn" style="color: #FCCA46" @click="editor.isActive('textStyle', { color: '#fcca46' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#fcca46').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#fcca46' })}">
            #FCCA46
          </button>
          
          <button class="colorBtn" style="color: #CCCCCC" @click="editor.isActive('textStyle', { color: '#CCCCCC' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#CCCCCC').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#CCCCCC' })}">
            #CCCCCC
          </button>
          <button class="colorBtn" style="color: #FFFFFF" @click="editor.isActive('textStyle', { color: '#FFFFFF' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#FFFFFF').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#FFFFFF' })}">
            #FFFFFF
          </button>
        </div>
      </div>
      <div class="editor-line-div">|</div>

      <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }" title="link">
        <i class="fas fa-link"></i>
      </button>
      <button @click="editor.chain().focus().unsetLink().run()" v-if="editor.isActive('link')" title="unlink">
        <i class="fas fa-unlink"></i>
      </button>

      <div class="editor-line-div">|</div>

      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" title="Indent">
        <i class="fas fa-indent"></i>
      </button>
      <div class="editor-line-div">|</div>
      <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" title="Left">
        <i class="fas fa-align-left"></i>
      </button>
      <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" title="Center">
        <i class="fas fa-align-center"></i>
      </button>
      <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" title="Right">
        <i class="fas fa-align-right"></i>
      </button>
      
      <div class="editor-line-div">|</div>

      <div class="editor-table-div">
        <i class="fas fa-table"></i>
        <div @mouseout="cho_tableX = 0;cho_tableY=0" >
          <div v-for="y in def_tableY" :key="y" class="tableAddDivRow" :style="'width:'+def_tableX*20+'px;height:18px'" @mouseover="cho_tableY = y+1; isAddBlock()" v-show="!editor.can().mergeCells()">
            <div 
            v-for="x in def_tableX" 
            :key="x" class="tableAddDiv" 
            @mouseover="cho_tableX = x+1; isAddBlock()" 
            @click="editor.chain().focus().insertTable({ rows: cho_tableY-1, cols: cho_tableX-1, withHeaderRow: true }).run()"
            :class="cho_tableX > x && cho_tableY > y?'active':''"></div>
          </div>
      
          <div v-if="editor.can().addColumnBefore()">
            <button @click="editor.chain().focus().addColumnBefore().run()" :disabled="!editor.can().addColumnBefore()">
              addColumnBefore
            </button>
            <button @click="editor.chain().focus().addColumnAfter().run()" :disabled="!editor.can().addColumnAfter()">
              addColumnAfter
            </button>
            <button @click="editor.chain().focus().deleteColumn().run()" :disabled="!editor.can().deleteColumn()">
              deleteColumn
            </button>
            <hr>
            <button @click="editor.chain().focus().addRowBefore().run()" :disabled="!editor.can().addRowBefore()">
              addRowBefore
            </button>
            <button @click="editor.chain().focus().addRowAfter().run()" :disabled="!editor.can().addRowAfter()">
              addRowAfter
            </button>
            <button @click="editor.chain().focus().deleteRow().run()" :disabled="!editor.can().deleteRow()">
              deleteRow
            </button>
            <hr>
            <button @click="editor.chain().focus().mergeCells().run()" :disabled="!editor.can().mergeCells()">
              mergeCells
            </button>
            <button @click="editor.chain().focus().splitCell().run()" :disabled="!editor.can().splitCell()">
              splitCell
            </button>
            <hr>

            <!-- <button @click="editor.chain().focus().toggleHeaderColumn().run()" :disabled="!editor.can().toggleHeaderColumn()">
              toggleHeaderColumn
            </button>
            <button @click="editor.chain().focus().toggleHeaderRow().run()" :disabled="!editor.can().toggleHeaderRow()">
              toggleHeaderRow
            </button> -->
            <button @click="editor.chain().focus().toggleHeaderCell().run()" :disabled="!editor.can().toggleHeaderCell()">
              toggleHeaderCell
            </button>
            <button @click="editor.chain().focus().mergeOrSplit().run()" :disabled="!editor.can().mergeOrSplit()">
              mergeOrSplit
            </button>
            <!-- <button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()" :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')">
              setCellAttribute
            </button> -->
            <hr>

            <button @click="editor.chain().focus().deleteTable().run()" :disabled="!editor.can().deleteTable()">
              deleteTable
            </button>
          </div>
        </div>
      </div>

      <div class="editor-line-div">|</div>
      
      <button @click="addImage" title="Image">
        <i class="fas fa-image"></i>
      </button>
      <div class="editor-line-div">|</div>
      <button @click="editor.chain().focus().undo().run()" title="Undo">
        <i class="fas fa-undo"></i>
      </button>
      <button @click="editor.chain().focus().redo().run()" title="Redo">
        <i class="fas fa-redo"></i>
      </button>
    </div>
    <bubble-menu
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" title="Bold">
        <i class="fas fa-bold"></i>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" title="Italic">
        <i class="fas fa-italic"></i>
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }" title="strike">
        <i class="fas fa-strikethrough"></i>
      </button>
      <button @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }" title="highlight">
        <i class="fas fa-highlighter"></i>
      </button>
      <div class="editor-line-div">|</div>
      <div class="editor-select-div">
        <i class="fas fa-heading"></i>
        <div>
          <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" title="h1">
            <h1>Heading 1</h1>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" title="h2">
            <h2>Heading 2</h2>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" title="h3">
            <h3>Heading 3</h3>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }" title="h4">
            <h4>Heading 4</h4>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }" title="h5">
            <h5>Heading 5</h5>
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }" title="h6">
            <h6>Heading 6</h6>
          </button>
        </div>
      </div>
      <div class="editor-select-div">
        <i class="fas fa-font"></i>
        <div>
          <!-- <button @click="editor.isActive('textStyle', { fontFamily: 'AORUS' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('AORUS').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'AORUS' }) }">
            <span style="font-family: 'AORUS'">AORUS</span>
          </button> -->
          <button @click="editor.isActive('textStyle', { fontFamily: 'Aldrich' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('Aldrich').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Aldrich' }) }">
            <span style="font-family: 'Aldrich'">Aldrich</span>
          </button>
          <button @click="editor.isActive('textStyle', { fontFamily: 'Roboto' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('Roboto').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Roboto' }) }">
            <span style="font-family: 'Roboto'">Roboto</span>
          </button>
          <button @click="editor.isActive('textStyle', { fontFamily: 'Microsoft JhengHei' })?editor.chain().focus().unsetFontFamily().run():editor.chain().focus().setFontFamily('Microsoft JhengHei').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Microsoft JhengHei' }) }">
            <span style="font-family: 'Microsoft JhengHei'">Microsoft JhengHei</span>
          </button>
          
        </div>
      </div>
      <div class="editor-select-div">
        <i class="fas fa-tint"></i>
        <div>
          <button class="colorBtn" style="color: #ff6400" @click="editor.isActive('textStyle', { color: '#FF6400' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#FF6400').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#FF6400' })}">
            #FF6400
          </button>
          <button class="colorBtn" style="color: #FCCA46" @click="editor.isActive('textStyle', { color: '#fcca46' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#fcca46').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#fcca46' })}">
            #FCCA46
          </button>
          
          <button class="colorBtn" style="color: #CCCCCC" @click="editor.isActive('textStyle', { color: '#CCCCCC' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#CCCCCC').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#CCCCCC' })}">
            #CCCCCC
          </button>
          <button class="colorBtn" style="color: #FFFFFF" @click="editor.isActive('textStyle', { color: '#FFFFFF' })?editor.chain().focus().unsetColor().run():editor.chain().focus().setColor('#FFFFFF').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#FFFFFF' })}">
            #FFFFFF
          </button>
        </div>
      </div>
      <div class="editor-line-div">|</div>

      <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }" title="link">
        <i class="fas fa-link"></i>
      </button>
      <button @click="editor.chain().focus().unsetLink().run()" v-if="editor.isActive('link')" title="unlink">
        <i class="fas fa-unlink"></i>
      </button>

      <div class="editor-line-div">|</div>

      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" title="Indent">
        <i class="fas fa-indent"></i>
      </button>
      <div class="editor-line-div">|</div>
      <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" title="Left">
        <i class="fas fa-align-left"></i>
      </button>
      <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" title="Center">
        <i class="fas fa-align-center"></i>
      </button>
      <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" title="Right">
        <i class="fas fa-align-right"></i>
      </button>
      
      <div class="editor-line-div">|</div>

      <div class="editor-table-div">
        <i class="fas fa-table"></i>
        <div @mouseout="cho_tableX = 0;cho_tableY=0" >
          <div v-for="y in def_tableY" :key="y" class="tableAddDivRow" :style="'width:'+def_tableX*20+'px;height:18px'" @mouseover="cho_tableY = y+1; isAddBlock()" v-show="!editor.can().mergeCells()">
            <div 
            v-for="x in def_tableX" 
            :key="x" class="tableAddDiv" 
            @mouseover="cho_tableX = x+1; isAddBlock()" 
            @click="editor.chain().focus().insertTable({ rows: cho_tableY-1, cols: cho_tableX-1, withHeaderRow: true }).run()"
            :class="cho_tableX > x && cho_tableY > y?'active':''"></div>
          </div>
      
          <div v-if="editor.can().addColumnBefore()">
            <button @click="editor.chain().focus().addColumnBefore().run()" :disabled="!editor.can().addColumnBefore()">
              addColumnBefore
            </button>
            <button @click="editor.chain().focus().addColumnAfter().run()" :disabled="!editor.can().addColumnAfter()">
              addColumnAfter
            </button>
            <button @click="editor.chain().focus().deleteColumn().run()" :disabled="!editor.can().deleteColumn()">
              deleteColumn
            </button>
            <hr>
            <button @click="editor.chain().focus().addRowBefore().run()" :disabled="!editor.can().addRowBefore()">
              addRowBefore
            </button>
            <button @click="editor.chain().focus().addRowAfter().run()" :disabled="!editor.can().addRowAfter()">
              addRowAfter
            </button>
            <button @click="editor.chain().focus().deleteRow().run()" :disabled="!editor.can().deleteRow()">
              deleteRow
            </button>
            <hr>
            <button @click="editor.chain().focus().mergeCells().run()" :disabled="!editor.can().mergeCells()">
              mergeCells
            </button>
            <button @click="editor.chain().focus().splitCell().run()" :disabled="!editor.can().splitCell()">
              splitCell
            </button>
            <hr>

            <!-- <button @click="editor.chain().focus().toggleHeaderColumn().run()" :disabled="!editor.can().toggleHeaderColumn()">
              toggleHeaderColumn
            </button>
            <button @click="editor.chain().focus().toggleHeaderRow().run()" :disabled="!editor.can().toggleHeaderRow()">
              toggleHeaderRow
            </button> -->
            <button @click="editor.chain().focus().toggleHeaderCell().run()" :disabled="!editor.can().toggleHeaderCell()">
              toggleHeaderCell
            </button>
            <button @click="editor.chain().focus().mergeOrSplit().run()" :disabled="!editor.can().mergeOrSplit()">
              mergeOrSplit
            </button>
            <!-- <button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()" :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')">
              setCellAttribute
            </button> -->
            <hr>

            <button @click="editor.chain().focus().deleteTable().run()" :disabled="!editor.can().deleteTable()">
              deleteTable
            </button>
          </div>
        </div>
      </div>
      
      <button @click="addImage" title="Image">
        <i class="fas fa-image"></i>
      </button>
      <div class="editor-line-div">|</div>
      <div class="editor-line-div">|</div>
      <button @click="editor.chain().focus().undo().run()" title="Undo">
        <i class="fas fa-undo"></i>
      </button>
      <button @click="editor.chain().focus().redo().run()" title="Redo">
        <i class="fas fa-redo"></i>
      </button>
    </bubble-menu>
    <editor-content class="editor-content-div" :editor="editor" />
    <div class="editor-footer-div">
      prower by Ray01
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent,BubbleMenu } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'

import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import { Color } from '@tiptap/extension-color'

import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'

// const axios = require('axios');


const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: element => {
          return {
            backgroundColor: element.getAttribute('data-background-color'),
          }
        },
        renderHTML: attributes => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          }
        },
      },
    }
  },
})

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },

  components: {
    EditorContent,
    BubbleMenu
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Highlight,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),

        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        // Default TableCell
        // TableCell,
        // Custom TableCell with backgroundColor attribute
        CustomTableCell,

        Text,
        TextStyle,
        FontFamily,
        Color,
        Link,

        Image,
        Dropcursor,
      ],
      content: this.value,
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML())

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    })
  },

  data() {
    return {
      editor: null,

      def_tableY: 4,
      def_tableX: 4,
      cho_tableY: 0,
      cho_tableX: 0,

      max_def_tableY: 6,
      max_def_tableX: 6,

      addImageType: 1,
      addImageStatus: false,
    }
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.value, false)
    },
  },
  methods: {
    addImage() {
      this.addImageStatus = true;
      // this.addImageType = 1;
    },
    submitImage(){
      var url = document.getElementById('addImageInputUrl').value;
      if(url){
        this.editor.chain().focus().setImage({ src: url }).run()
        this.addImageStatus = false;
      }else{
        if(this.addImageType==1){
          alert('Add image url');
        }
        if(this.addImageType==2){
          alert('upload image file');
        }
        
      }
    },
    imageView(){
      document.getElementById('addImageSrc').src = '';
      if(this.addImageType == 1){
        var url = document.getElementById('addImageInputUrl').value;
        if(url){
          document.getElementById('addImageSrc').src = url;
        }
      }
    },
    imageUploadFile(e){

      document.getElementById('addImageSrc').src = '';
      document.getElementById('addImageInputUrl').value = "";

      var files = e.target.files;
      console.log(files[0]);
 
      let formData = new FormData();
      formData.append('image', files[0]);
      formData.append('title', files[0].name);
      formData.append('description', '');

      // axios({
      //   method: 'post',
      //   url: '',
      //   data: {

      //   }
      // }).then(function (response) {
      //   console.log(response);
      //   document.getElementById('addImageInputUrl').value = response.url;
      //   
      
      // }).catch(e => {
      //   console.log(e)
      // })

    },


    setLink() {
      const url = window.prompt('URL')

      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url, target: '_blank' })
        .run()
    },
    isAddBlock(){
      if(this.def_tableX < this.max_def_tableX){
        if(this.cho_tableX-1 == this.def_tableX) this.def_tableX = this.def_tableX + 1;
      }
      if(this.def_tableY < this.max_def_tableY){
        if(this.cho_tableY-1 == this.def_tableY) this.def_tableY = this.def_tableY + 1;
      }
    }
  },


  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
:focus-visible {
    outline: none;
}

button:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}



.ProseMirror {
  padding: 10px 15px;
  font-family: 'Roboto',sans-serif;

  > * + * {
    margin-top: 0.75em;
  }
  a{
    text-decoration: none;
    color: #ff6400;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    padding-inline-start: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 1px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
        margin-top: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: rgba(241, 243, 245,0.2);
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }
  }
}
.windowBoxCover{
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
  opacity: 0;
  transition: 0.5s all;
}
.windowBoxCover.active{
  z-index: 999;
  opacity: 1;
}
.windowBox{
  position: relative;
  margin: 0 auto;
  top: -100%;
  width: calc(100% - 30px);
  max-width: 450px;
  height: auto;
  min-height: 100px;
  background: #1C1C1C;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #999;
  padding: 5px 15px 15px 15px;
  opacity: 0;
  transition: 0.5s all;
}
.windowBoxCover.active .windowBox{
  top: 60px;
  opacity: 1;
}

.windowBox button.type{
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  background: #333;
  color:#ccc;
  width: 50%;
  cursor: pointer;
}
.windowBox button.type:hover,
.windowBox button.type.active{
  background: #ff6400;
  color:#fff;
  border-radius: 0;
}
.windowBox .submitBtn{
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  background: #ff6400;
  color:#fff;
  width: auto;
  min-width: 80px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0 0 10px;
}
.windowBox .cancelBtn{
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  background: #333;
  color:#ccc;
  width: auto;
  min-width: 80px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0 0 10px;
}

.windowBox input{
  position: relative;
  display: block;
  padding: 10px 10px;
  background: #333;
  color: #fff;
  width: calc(100% - 20px);
  border: 0px solid #fff;
  margin-top: 10px;
}

.editor-tool-div{
  position: relative;
  display: inline-block;
  width: calc(100% - 20px);
  height: auto;
  background: #1C1C1C;
  padding : 10px;
  border-radius: 10px 10px 0 0;
}
.editor-content-div{
  position: relative;
  display: inline-block;
  width: calc(100% - 0px);
  height: auto;
  min-height: 100px;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  background: #1C1C1C;
  color: #fff;
}

.editor-content-div .ProseMirror{
  padding: 10px;
}


.editor-footer-div{
  font-size: 10px;
  background: #1C1C1C;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 0 0 10px 10px;
}
button{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background: #1C1C1C;
  border: 0;
  color: #fff;
  padding: 6px 10px;
  font-size: 14px;
  width: 40px;
  height: 40px;
  white-space: nowrap;
}
button:hover{
  border-radius: 50%;
  background: #333;
}
button.is-active{
  border-radius: 50%;
  background: #ff6400;
  color: #fff;
}
button.is-active:hover{
  border-radius: 50%;
  background: #333;
}

.editor-line-div{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: auto;
  height: auto;
  font-size: 14px;
  background: #1C1C1C;
  padding: 4px 10px;
  color: #ccc;
}
.editor-select-div{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  font-size: 14px;
  background: #1C1C1C;
  text-align: center;
  line-height: 40px;
  color:#fff;
  // padding: 4px 10px;
}
.editor-select-div:hover{
  border-radius: 50%;
  background: #333;
}
.editor-select-div>div{
  padding: 0 0;
  display: none;
}
.editor-select-div:hover>div{
    position: absolute;
    z-index: 9999;
    display: inline;
    top: 100%;
    left: 0;
    width: auto;
    min-width: 30px;
    height: auto;
    padding: 10px;
    background: #1C1C1C;
    box-shadow: 0px 0px 1px #fff;
}

.editor-select-div h1,
.editor-select-div h2,
.editor-select-div h3,
.editor-select-div h4,
.editor-select-div h5,
.editor-select-div h6{
  margin: 0
}
.editor-select-div button{
  border-radius: 0;
  display: block;
  width: 100%;
  height: auto;
  background: #1C1C1C;
}

.editor-select-div button.is-active{
  border-radius: 0;
  background: #ff6400;
}
.editor-select-div button:hover{
  border-radius: 0;
  background: #333;
}

.editor-table-div{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: auto;
  height: auto;
  font-size: 14px;
  background: #1C1C1C;
  color:#fff;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.editor-table-div button{
  border-radius: 0;
  display: block;
  width: 100%;
  height: auto;
  background: #1C1C1C;
}
.editor-table-div button.is-active{
  border-radius: 0;
  background: #ff6400;
}
.editor-table-div button:hover{
  border-radius: 0;
  background: #333;
}
.editor-table-div:hover{
  border-radius: 50%;
  background: #333;
}
.editor-table-div>div{
  display: none;
}
.editor-table-div:hover>div{
    position: absolute;
    z-index: 9999;
    display: inline;
    top: 100%;
    left: 0;
    width: auto;
    min-width: 30px;
    height: auto;
    padding: 10px;
    background: #1C1C1C;
    box-shadow: 0px 0px 1px #fff;
}

.tableAddDivRow{
  position: relative;
  display: block;
  width: auto;
  text-align: center;
}
.tableAddDiv{
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-right: 2px solid #666;
  border-bottom: 2px solid #666;
  vertical-align: top;
}
.tableAddDivRow .tableAddDiv:nth-child(1){
  border-left: 2px solid #666;
}
.tableAddDivRow:nth-child(1) .tableAddDiv{
  border-top: 2px solid #666;
}

.tableAddDiv.active{
  border-right: 2px solid #ff6400;
  border-bottom: 2px solid #ff6400;
}
.tableAddDivRow .tableAddDiv.active:nth-child(1){
  border-left: 2px solid #ff6400;
}
.tableAddDivRow:nth-child(1) .tableAddDiv.active{
  border-top: 2px solid #ff6400;
}


.colorBtn{
  min-width: 100px;
}
hr{
  border: 0;
  border-bottom: 1px solid #333;
}

.bubble-menu {
  display: inline-block;
  background-color: #1C1C1C;
  padding: 10px;
  box-shadow: 0px 0px 1px #fff;

  &button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 5px 8px;
    width: 40px;
    height: 40px;
    border-radius: 0;
    &:hover{
      border-radius: 50%;
      background: #333;
      &div{
        &button{
          width: auto;
          border-radius: 0;
          height: auto;
        }
      }
    }
    &.is-active {
      border-radius: 50%;
      background: #ff6400;
    }
  }
}
.bubble-menu-table {
  display: inline-block;
  background-color: #1C1C1C;
  padding: 10px;
  box-shadow: 0px 0px 1px #fff;

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 5px 8px;
    width: 100%;
    border-radius: 0;
    &:hover{
      border-radius: 50%;
      background: #333;
      &div{
        &button{
          width: auto;
          border-radius: 0;
          height: auto;
        }
      }
    }
    &.is-active {
      border-radius: 50%;
      background: #ff6400;
    }
  }
}

</style>