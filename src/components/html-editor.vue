<template>
  <div class="editor-container">
    <codemirror
      :value="fiddle.htmlCode"
      :options="cmOptions"
      @input="updateFiddle({ htmlCode: $event })"
    />
  </div>
</template>

<script>
import { fiddleGetters, fiddleActions } from '../store/helpers'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlembedded/htmlembedded.js'
export default {
  components: {
    codemirror
  },
  data () {
    return {
      cmOptions: {
        tabSize: 2,
        mode: 'text/html',
        lineNumbers: true,
        line: true
      },
      labelText: 'HTML'
    }
  },
  computed: {
    ...fiddleGetters
  },
  methods: {
    ...fiddleActions
  }
}
</script>

<style>
.editor-container {
  position: relative;
  border: 1px solid #beb1b1;
  height: 100%;
}

.vue-codemirror {
  height: 100%;
}

.CodeMirror {
  height: 100%;
}
</style>
