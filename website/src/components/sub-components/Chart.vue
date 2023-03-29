<template>
  <div>
    <!-- 定義したdataとoptionsを渡してあげます。 -->
    <div
      class="chart d-flex flex-wrap flex-row mb-6"
    >
      <Radar :data="SkillsetData.JS" :options="options"/>
      <Radar :data="SkillsetData.language" :options="options"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  // @types/chart.jsの型付けを使用するためにimportしてます。
  import type { ChartData, ChartOptions } from 'chart.js';

  // それぞれの部品をインポートしていきます。
  // まだ種類があると思いますが、とりあえず手当たり次第importしておきます。
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    Filler,
    LineElement
  } from 'chart.js'

  // 今回はRadar-chartを作成するので、import。
  // 他にも{ Bar }など、種類があります。
  import { Radar } from 'vue-chartjs'

  // ここでChartJSでこれらを使います〜と登録してあげます。
  ChartJS.register(CategoryScale, LinearScale, BarElement,PointElement ,RadialLinearScale, LineElement, Filler, Title, Tooltip, Legend)

  // ここではchartに使うdataを登録していきます。
  // ChartData<'radar'>でRadar-Chartの型付けを使ってます。
  // 他にも<"bar">などがあります。
  const SkillsetData = {
    JS: {
      labels: [
        'Node',
        'Vue',
        'React',
      ],
      datasets: [{
        label: 'JavaScript',
        data: [8, 8, 0],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      }]
    },
    language: {
      labels: ['C','CSS','HTML','JavaScript', 'TypeScript', 'Python', 'Visual Basic', 'C#', 'C++', 'R'],
      datasets: [{
        label: 'JavaScript',
        data: [8, 8, 8, 6, 6, 3, 3, 3, 1, 1, 0.5],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      }]
    },
  };

  // ここではchartに使うoptionsを登録していきます。
  // ChartOptions<'radar'>でRadar-Chartの型付けを使ってます。
  // 他にも<"bar">などがあります。
  const options:ChartOptions<'radar'> = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 10,
      }
    }
  };
</script>

<style scoped>
  .chart{
    height: 250px;
  }
  
</style>