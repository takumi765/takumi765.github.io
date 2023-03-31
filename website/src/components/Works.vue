<template>
  <div class="body">
    <h1 style="padding-top: 7%;">Works</h1>

    <v-card>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
      >
        <v-tab value="blogs">Blogs</v-tab>
        <v-tab value="apps">Apps</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="blogs">
            <Blogs />
          </v-window-item>

          <v-window-item value="apps">
            <Apps />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    
  </div>
</template>

<script setup>
  import Blogs from '@/components/sub-components/Blogs.vue'
  import Apps from '@/components/sub-components/Apps.vue'
</script>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>

<style scoped>
</style>