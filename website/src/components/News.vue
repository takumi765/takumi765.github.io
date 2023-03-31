<template>
  <div class="body">
    <h1 style="padding-top: 7%;">News</h1>
    <v-table density="conpact">
      <thead>
        <tr>
          <th width=10px class="text-left">
            <div  class="d-flex flex-wrap flex-row">
              Date
              <div style="margin: 0% 0% 0% 10%; color: gray;">
                <v-chip
                  density="compact"
                  @click="changeOrder()"
                  v-bind:text="orderType"
                ></v-chip>
              </div>
            </div>
          </th>
          <th class="text-left">
            Title
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="newsInfo in pageList[page-1]"
          :key="newsInfo.title"
        >
          <td>{{ newsInfo.date }}</td>
          <td v-html="newsInfo.title"></td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center">
      <v-pagination
        v-model="page"
        v-bind:length="totalPages"
        :total-visible="6"
        density=conpact
      ></v-pagination>
    </div>
    
  </div>
</template>

<script setup>
  import { ref, computed, reactive} from 'vue'; 
  import NewsInfoList_RAW from '@/assets/data/NewsData';
  
  const page = ref(1);

  /* ブログをソートする */
  const daySort = (a,b) => {
    const [ a_year, a_month, a_day ] = a.date.split('.');
    const [ b_year, b_month, b_day ] = b.date.split('.');

    if(a_year !== b_year){
      return a_year - b_year;
    }else if(a_month !== b_month){
      return a_month - b_month;
    }else if(a_day !== b_day){
      return a_day - b_day;
    }
  }
  var NewsInfoList = NewsInfoList_RAW.sort((a,b) => daySort(b, a));
  const orderType = ref("↓");

  // 1ページあたりの記事数
  const parPage = 10;

  /* 総ページ数を数える */
  var syou = (NewsInfoList.length)/parPage;
  var totalPages;
  if(syou%1 === 0){
    totalPages = Math.floor(syou);
  }else{
    totalPages = Math.floor(syou)+1;
  }

  var pageList = reactive([]);
  var newsCount;
  /* ページごとにブログを分割する */
  const createPageList = (NewsInfoList) => {
    pageList.splice(0); // 配列を空にする
    newsCount = 0;
    for(let i=0; i<totalPages; i++){
      pageList[i]=[];
      for(let j=0;j<parPage;j++){
        if(newsCount<NewsInfoList.length){
          pageList[i][j] = NewsInfoList[newsCount++];
        }
      }
    }
  }
  /* ページ毎にブログを格納する */
  createPageList(NewsInfoList);

  /* 昇順・降順変更 */
  const changeOrder = () => {
    if(orderType.value === "↑"){
      orderType.value = "↓";
      NewsInfoList = NewsInfoList_RAW.sort((a,b) => daySort(b, a));
    }else{
      orderType.value = "↑";
      NewsInfoList = NewsInfoList_RAW.sort((a,b) => daySort(a, b));
    }
    /* ページ毎にブログを格納する */
    createPageList(NewsInfoList);
  }
</script>

<style scoped>
  .v-table thead{
    background-color: rgb(231, 231, 255);
  }
</style>