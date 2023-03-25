<template>
  <div class="body">
    <h1>News</h1>
    <v-list lines="one">
      <v-list-item
        v-for="item in news"
        :key="item.title"
        :title="item.title"
        :subtitle="item.content"
      ></v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        news: [
          {
            title  : "AAA",
            content: "AAA",
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>