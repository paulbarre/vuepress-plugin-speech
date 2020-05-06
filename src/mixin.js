export default {
  mounted() {
    if (this.$speech) {
      this.$speech.initialize()
    }
  }
}