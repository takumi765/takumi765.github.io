<template>
  <div class="body">
    <h1>News</h1>
    <v-table density="conpact">
      <thead>
        <tr>
          <th width=10px class="text-left">
            Date
          </th>
          <th class="text-left">
            Title
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in pageList[page-1]"
          :key="item.date"
        >
          <td>{{ item.date }}</td>
          <td v-html="item.title"></td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center">
      <v-pagination
        v-model="page"
        v-bind:length="totalPages"
        :total-visible="parPage"
        density=conpact
      ></v-pagination>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'; 
  const page = ref(1);
  
  const NewsInfoList = [
    {
      date : "2023.03.24",
      title: `<a href="https://takumi765.github.io/" target=_blank>Webサイト</a>をリニューアルしました`,
    },
  ]

  // 1ページあたりの記事数
  const parPage = 8;

  /* 総ページ数を数える */
  var syou = (NewsInfoList.length)/parPage;
  console.log(syou);
  var totalPages;
  if(syou%1 === 0){
    totalPages = Math.floor(syou);
  }else{
    totalPages = Math.floor(syou)+1;
  }

  /* ページ毎にブログを格納する */
  var pageList = [];
  var newsCount=0;
  for(let i=0; i<totalPages; i++){
      pageList[i]=[];
    for(let j=0;j<parPage;j++){
      if(newsCount<NewsInfoList.length){
        pageList[i][j] = NewsInfoList[newsCount++];
      }
    }
    console.log(pageList);
  }
</script>

<style scoped>
  .v-table thead{
    background-color: rgb(231, 231, 255);
  }
</style>