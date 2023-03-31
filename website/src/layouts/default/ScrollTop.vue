<template>
  <div>
    <router-link to=""><v-btn 
      rounded
      size=small
      v-show="buttonActive"
    >Topへ</v-btn></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonActive: false,
      scroll: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow) // スクロールの位置を監視
  },
  methods: {
    scrollWindow() {
      const top = 700
      this.scroll = window.scrollY
      if (top <= this.scroll) { // [top]px以上スクロールした場合のみボタンを表示
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    }
  }
}
</script>

<style scoped>
  .v-btn{
    bottom:20px;
    position: fixed;
    background-color: white;
    font-weight: bold;
  }
</style>