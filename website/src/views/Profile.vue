<template>
  <div>
    <div id="about-link" class="about pa-5"><About /></div>
    <div id="skillset-link" class="skillset pa-5"><SkillSet /></div>
    <div id="news-link" class="news pa-5"><News /></div>
    <div id="works-link" class="works pa-5"><Works /></div>
    <div class="footer pa-5"><Footer /></div>
  </div>
</template>

<script setup>
  import About    from '@/components/About.vue'
  import SkillSet from '@/components/SkillSet.vue'
  import News     from '@/components/News.vue'
  import Works    from '@/components/Works.vue'
  import Footer from '@/layouts/default/Footer.vue'
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
  .footer{
    background-color: rgb(206, 206, 206);
  }
</style>