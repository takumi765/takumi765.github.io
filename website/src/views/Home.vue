<template>
  <div>
    <router-link to="/">Go to Profile</router-link>
    <About />
    <HelloWorld />
  </div>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import About from '@/components/About.vue'
</script>

<style scoped>
</style>