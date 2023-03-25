<template>
  <div class="body">
    <h1>Skill Set</h1>
    <div class="d-flex flex-wrap flex-row mb-6">
      <v-card 
        v-for="skill in skillInfos"
        :key="skill.language"
        width="200"
      >
        <template v-slot:title>
          {{ skill.language }}
        </template>

        <template v-slot:subtitle>
        </template>

        <template v-slot:text>
          {{ skill.peirod }}
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        skillInfos: [
          {
            language: "C",
            peirod : "使用歴：3年",
          },
          {
            language: "CSS",
            peirod : "使用歴：3年",
          },
          {
            language: "HTML",
            peirod : "使用歴：3年",
          },
          {
            language: "JavaScript",
            peirod : "使用歴：2年",
          },
          {
            language: "TypeScript",
            peirod : "使用歴：2年",
          },
          {
            language: "C#",
            peirod : "使用歴：0.5年",
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .v-card{
    margin: 1%;
    background-color: rgb(208, 208, 253);
  }
</style>