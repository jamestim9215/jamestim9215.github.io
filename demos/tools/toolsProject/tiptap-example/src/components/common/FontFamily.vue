<script>
import {Mark} from 'tiptap'
import {updateMark} from 'tiptap-commands'

export default class FontFamily extends Mark {
  get name() {
    return 'font_family'
  }

  get schema() {
    return {
      attrs: {
        font_family: {
          default: '',
        },
      },
      content: 'inline*',
      group: 'block',
      draggable: false,
      parseDOM: [{
        style: 'font-family',
        getAttrs: mark => ({font_family: mark})
      }],
      toDOM: mark => ['span', {style: `font-family: ${mark.attrs.font_family}`}, 0],
    }
  }

  commands({type}) {
    return (attrs) => updateMark(type, attrs)
  }
}
</script>
