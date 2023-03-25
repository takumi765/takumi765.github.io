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
        <v-tab value="about">About</v-tab>
        <v-tab value="skillset">Skill Set</v-tab>
        <v-tab value="news">News</v-tab>
        <v-tab value="works">Works</v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script setup>
  //
</script>