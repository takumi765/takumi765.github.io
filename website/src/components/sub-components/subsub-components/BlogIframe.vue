<template>
  <div>
    <!-- noteのブログ -->
    <div v-if="props.blogInfo.type==='note'">
      <iframe
        class="note-embed noteCard"
        v-bind:src="props.blogInfo.url"
      ></iframe>
    </div>
    <!-- hatenaのブログ -->
    <div v-if="props.blogInfo.type==='hatena'">
      <iframe
        class="hatenaCard"
        v-bind:src="'https://hatenablog-parts.com/embed?url='+props.blogInfo.url"
        frameborder="0" 
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    blogInfo: {
      date : Number,
      type : String,
      url  : String,
    }
  })
</script>

<style scoped>
  .noteCard{
    border: 0;
    display: block;
    max-width: 99%;
    width: 400px;
    height: 200px;
    padding: 0px;
    margin: 1% 1% 1% 1%; 
    position: static; 
    visibility: visible;
  }
  .hatenaCard{
    max-width:99%; 
    width: 400px; 
    height: 200px;
    margin: 1% 1% 1% 1%;
    position: static; 
    visibility: visible;
  }
</style>