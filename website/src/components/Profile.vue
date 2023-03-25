<template>
  <div class="profile">
    <v-card
      class="mx-auto"
      max-width="434"
      rounded="0"
    >
      <v-img
        height="100%"
        cover
        src="../assets/hero.jpg"
      >
        <v-avatar
          color="grey"
          size="100"
          rounded="50%"
        >
          <v-img cover src="../assets/icon.jpg"></v-img>
        </v-avatar>
        <v-list-item
          class="text-white"
          title="Takumi Iwasaki"
          subtitle="Student"
        ></v-list-item>
      </v-img>
    </v-card>
  </div>
</template>

<script>
</script>

<style scoped>
  .profile{
    background-color: aqua;
    margin: 0% 10%;
  }
</style>
