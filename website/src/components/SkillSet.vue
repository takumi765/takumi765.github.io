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
          <div v-if="checkPlus(skill.peirod.month)">使用歴：{{ skill.peirod.year }}年{{ skill.peirod.month }}ケ月</div>
          <div v-if="!checkPlus(skill.peirod.month)">使用歴：{{ skill.peirod.year-1 }}年{{ 12+skill.peirod.month }}ケ月</div>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import Chart from '@/components/sub-components/Chart';
  import skillInfos_RAW from "@/assets/data/SkillsetData";
  const skillInfos = skillInfos_RAW;

  const checkPlus = (num) => {
    if(num < 0) return false;
    else return true;
  }
</script>

<style scoped>
  .v-card{
    margin: 1%;
    background-color: rgb(208, 208, 253);
  }
</style>