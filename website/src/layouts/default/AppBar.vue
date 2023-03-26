<template>
  <div>
    <v-app-bar :elevation="3">
      <v-app-bar-title>
        <!-- <v-img src="../../assets/icon.jpg" style="width: 24px"/> -->
        <v-icon icon="mdi-circle-slice-4" />
        Iwasaki Takumi
      </v-app-bar-title>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
        <v-tab><router-link to="#about-link">About</router-link></v-tab>
        <v-tab><router-link to="#skillset-link">Skill Set</router-link></v-tab>
        <v-tab><router-link to="#news-link">News</router-link></v-tab>
        <v-tab><router-link to="#works-link">Works</router-link></v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>