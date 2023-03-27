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
          <th class="text-left">
            Type
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
          <td>
            <v-badge
              color="info"
              v-bind:content="item.type"
              inline
            ></v-badge>
          </td>
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
      type : "research", 
      date : "2023.03.24",
      title: `<a href="https://takumi765.github.io/" target=_blank>Webサイト</a>をリニューアルしました`,
    },
    {
      type : "blog",
      date : "2022.09.20",
      title: `<a href="https://challenge-think.hatenablog.com/entry/2022/09/20/174303" target=_blank>Hatena Blog</a>にてアカウントを開設しました`,
    },
    {
      type : "blog",
      date : "2022.09.05",
      title: `<a href="https://note.com/good_echium475" target=_blank>note</a>にてアカウントを開設しました`,
    },
    {
      type : "research award", 
      date : "2022.05.23",
      title: `<a href="https://sci22.iscie.or.jp/award/" target=_blank>システム制御情報学会研究発表講演会</a>にて学生発表賞を受賞しました`,
    },
    {
      type : "research", 
      date : "2022.05.20",
      title: `<a href="https://sci22.iscie.or.jp/" target=_blank>システム制御情報学会研究発表講演会</a>にて口頭発表しました`,
    },
    {
      type : "university",
      date : "2022.04.01",
      title: `<a href="https://www.es.osaka-u.ac.jp/ja/index.html" target=_blank>大阪大学大学院基礎工学研究科</a>博士前期課程へ進学しました`,
    },
  ]

  // 1ページあたりの記事数
  const parPage = 10;

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