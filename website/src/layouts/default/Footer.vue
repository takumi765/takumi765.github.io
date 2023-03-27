<template>
  <div>
    <v-footer class="footer">
      <div class="text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Takumi765</strong>
      </div>
    </v-footer>
    <div class="scrolltop pa-5"><ScrollTop /></div>
  </div>
</template>

<script setup>
  import ScrollTop from '@/layouts/default/ScrollTop.vue'
</script>
<style scoped>
  .footer{
    background-color: rgb(206, 206, 206);
  }
  .scrolltop{
    position: fixed;
    top: 10%;
    left: 90%;
  }
</style>
