<template>
  <span
    :class="{ 'tts--playable': playable }"
    @click="speak"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  },
  computed: {
    playable () {
      return this.$speech.voice !== undefined
    }
  },
  methods: {
    speak () {
      if (this.playable) {
        this.$speech.speak(this.alt || this.text)
      }
    }
  }
}
</script>

<style>
.tts--playable {
  cursor: pointer;
  border-bottom: 2px dotted #46bd87;
}
</style>