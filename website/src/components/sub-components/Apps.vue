<template>
  <div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        v-bind:length="totalPages"
        :total-visible="parPage"
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
              <!-- badgeを動的に入れたい -->
              <v-badge
                color="error"
                v-bind:content="item.type"
                inline
              ></v-badge>
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
          </div>
        </v-card-item>
      </v-card>
    </div>
    <router-link to="/home">Go to Home</router-link>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'; 
  import BlogIframe from '@/components/sub-components/BlogIframe.vue';

  const page = ref(1);
  const appInfoList = [
    {
      type   : "便利アプリ",
      title  : "復習テストアプリ",
      detail : "テストを登録・修正・削除をすることができます。登録済みテストを科目ごとにランダムに出題し苦手な問題を割り出すことが出来ます。",
      appUrl : `<a href="http://54.248.134.52/login/" target=_blank>こちら</a>`,
      blogUrl: `<a href="https://note.com/good_echium475/m/m6ef56a7ba8c2" target=_blank>こちら</a>`,
    },
  ]

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
