<template>
  <div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        v-bind:length="totalPages"
        :total-visible="6"
        density=conpact
      ></v-pagination>
    </div>
    <div class="d-flex flex-wrap flex-row mb-6">
      <v-card
        v-for="item in appInfoList"
        :key="item.title"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              <v-chip
                color="error"
                density="compact"
                v-bind:text="item.type"
                inline
              >
              </v-chip>
            </div>
            <div class="text-h6 mb-1">
              {{ item.title }}
            </div>
            <div class="text-caption">
              {{ item.detail }}
            </div>
          </div>
          <v-divider></v-divider>
          <div class="urls">
            <div v-if="item.appUrl">アプリは<a v-html="item.appUrl"></a></div>
            <div v-if="item.blogUrl">関連ブログは<a v-html="item.blogUrl"></a></div>
            <div v-if="item.repoUrl">リポジトリは<a v-html="item.repoUrl"></a></div>
          </div>
        </v-card-item>
      </v-card>
    </div>
    <router-link to="/home">Go to Home</router-link>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'; 
  import appInfoList_RAW from '@/assets/data/AppsData';

  const page = ref(1);
  
  const appInfoList = appInfoList_RAW;

  // 1ページあたりの記事数
  const parPage = 8;

  /* 総ページ数を数える */
  var syou = (appInfoList.length)/parPage;
  var totalPages;
  if(syou%1 === 0){
    totalPages = Math.floor(syou);
  }else{
    totalPages = Math.floor(syou)+1;
  }

  /* ページ毎にブログを格納する */
  var pageList = [];
  var appCount=0;
  for(let i=0; i<totalPages; i++){
      pageList[i]=[];
    for(let j=0; j<parPage; j++){
      if(appCount<appInfoList.length){
        pageList[i][j] = appInfoList[appCount++];
      }
    }
  }
</script>

<style scoped>
  .v-divider{
    margin: 2% 0%;
  }
  .v-card{
    margin: 1% 1% 1% 1%;
    width: 250px;
  }
</style>
