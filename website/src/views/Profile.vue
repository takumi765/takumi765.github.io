<template>
  <div>
    <div>
      <Hero class="Hero"/>
      <Toolbars />
      <Profile />
      <TwitterCard :msg="msg" />
      <ButtonCounter />
      <Tabs />
      <HelloWorld />
      <p>
        <router-link to="/home">Go to Home</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import TwitterCard from '@/components/TwitterCard.vue'
  import ButtonCounter from '@/components/ButtonCounter.vue';
  import Toolbars from '@/components/Toolbars.vue'
  import Tabs from '@/components/Tabs.vue'
  import Profile from '@/components/Profile.vue'
  import Hero from '@/components/Hero.vue'

  const msg = "Vueってやっぱおもろいわ〜!";
</script>

<style scoped>
  .Hero{
    margin: 1% 0;
  }
</style>