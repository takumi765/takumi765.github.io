<template>
  <div>
    <v-app-bar :elevation="3">
      <v-app-bar-title>
        <!-- <v-img src="../../assets/icon.jpg" style="width: 24px"/> -->
        <v-icon icon="mdi-circle-slice-4" />
        <router-link to="">Iwasaki Takumi</router-link>
      </v-app-bar-title>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
        <router-link to="#about-link"><v-tab>About</v-tab></router-link>
        <router-link to="#skillset-link"><v-tab>Skill Set</v-tab></router-link>
        <router-link to="#news-link"><v-tab>News</v-tab></router-link>
        <router-link to="#works-link"><v-tab>Works</v-tab></router-link>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'; 
  const tab = ref(null);
</script>