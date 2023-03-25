<template>
  <div>
    <router-link to="/">Go to Profile</router-link>
    <Hero class="Hero"/>
    <Toolbars />
    <About />
    <TwitterCard :msg="msg" />
    <ButtonCounter />
    <Tabs />
    <HelloWorld />
  </div>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import TwitterCard from '@/components/TwitterCard.vue'
  import ButtonCounter from '@/components/ButtonCounter.vue';
  import Toolbars from '@/components/Toolbars.vue'
  import Tabs from '@/components/Tabs.vue'
  import About from '@/components/About.vue'
  import Hero from '@/components/Hero.vue'
    

  const msg = "Vueってやっぱおもろいわ〜!";
</script>

<style scoped>
  .Hero{
    margin: 1% 0;
  }
</style>