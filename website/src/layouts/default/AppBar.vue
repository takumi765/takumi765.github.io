<template>
  <div>
    <v-app-bar :elevation="3">
      <v-app-bar-title>
        <!-- <v-img src="../../assets/icon.jpg" style="width: 24px"/> -->
        <v-icon icon="mdi-circle-slice-4" />
        Iwasaki Takumi
      </v-app-bar-title>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
        <v-tab value="one1">Item One</v-tab>
        <v-tab value="two1">Item Two</v-tab>
        <v-tab value="three1">Item Three</v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script setup>
  //
</script>