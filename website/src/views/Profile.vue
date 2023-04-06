<template>
  <div style="background-color: rgb(255, 247, 234);">
    <div id="about-link" class="about"><About /></div>
    <div id="skillset-link" class="skillset"><SkillSet /></div>
    <div id="news-link" class="news"><News /></div>
    <div id="works-link" class="works"><Works /></div>
    <div class="footer"><Footer /></div>
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
    /* background-color: rgb(255, 247, 234); */
    padding-top: 55px;
  }
  .skillset{
    /* background-color: rgb(227, 255, 231); */
    padding-top: 55px;
  }
  .news{
    /* background-color: rgb(219, 219, 219); */
    padding-top: 55px;
  }
  .works{
    /* background-color: rgb(255, 228, 228); */
    padding-top: 55px;
  }
  .footer{
    background-color: rgb(206, 206, 206);
    margin-top: 20px;
  }
</style>