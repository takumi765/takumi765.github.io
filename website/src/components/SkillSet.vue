<template>
  <div class="body">
    <h1>Skill Set</h1>
    <!-- <Chart /> -->
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
          使用歴：{{ skill.peirod }}年
        </template>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import Chart from '@/components/sub-components/Chart';
  import skillInfos_RAW from "@/assets/data/SkillsetData";
  const skillInfos = skillInfos_RAW;
</script>

<style scoped>
  .v-card{
    margin: 1%;
    background-color: rgb(208, 208, 253);
  }
</style>