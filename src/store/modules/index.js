/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
import camelCase from 'lodash/camelCase'

const files = require.context('.', false, /^((?!\.unit\.).)*\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[camelCase(key.replace(/(\.\/|\.js)/g, ''))] = files(key).default
})

export default modules
