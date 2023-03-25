<template>
  <div>
    <router-link to="/home">Go to Home</router-link>
    <div class="about pa-5"><About /></div>
    <div class="skillset pa-5"><SkillSet /></div>
    <div class="news pa-5"><News /></div>
    <div class="works pa-5"><Works /></div>
  </div>
</template>

<script setup>
  import About from '@/components/About.vue'
  import SkillSet from '@/components/SkillSet.vue'
  import News from '@/components/News.vue'
  import Works from '@/components/Works.vue'
  /* css */
  import '../styles/base.css';
</script>

<style scoped>
  .about{
    background-color: rgb(255, 247, 234);
  }
  .skillset{
    background-color: rgb(227, 255, 231);
  }
  .news{
    background-color: rgb(219, 219, 219);
  }
  .works{
    background-color: rgb(255, 228, 228);
  }
</style>