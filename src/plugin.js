import Vue from 'vue'

export default function install () {
  const speech = new Vue({
    data() {
      return {
        synth: undefined,
        voices: [],
        voice: undefined
      }
    },
    watch: {
      voice (val) {
        if (val) {
          localStorage.setItem('voiceURI', val.voiceURI)
        } else {
          localStorage.removeItem('voiceURI')
        }
      }
    },
    methods: {
      initialize() {
        this.synth = window.speechSynthesis
        this.populateVoices()
        this.synth.onvoiceschanged = this.populateVoices
      },

      populateVoices() {
        this.voices = this.synth.getVoices()
          .filter(voice => /fr[-_]FR/.test(voice.lang))
        const defaultVoice = localStorage.getItem('voiceURI')
        if (this.voice || defaultVoice) {
          this.setVoice(this.voice ? this.voice.voiceURI : defaultVoice)
        } else {
          this.setDefaultVoice()
        }
      },

      setVoice (voiceURI) {
        this.voice = this.voices.find(voice => {
          return voice.voiceURI === voiceURI
        })
        if (!this.voice) {
          this.setDefaultVoice()
        }
      },

      setDefaultVoice () {
        this.voice = this.voices.length > 0 ? this.voices[0] : undefined
      },

      speak (text) {
        if (!this.voice) {
          console.error('SpeechPlugin・No voice available')
          return
        }
        const utter = new SpeechSynthesisUtterance(text)
        utter.voice = this.voice
        this.synth.speak(utter)
      }
    }
  })

  Vue.prototype.$speech = speech
}