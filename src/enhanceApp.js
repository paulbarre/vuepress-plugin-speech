import Plugin from './plugin'
import options from '@dynamic/speech-plugin-options'

export default ({
  Vue,
}) => {
  Vue.use(Plugin, options)
}