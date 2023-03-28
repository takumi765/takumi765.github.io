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
    <div class="d-flex align-center flex-column">
      <v-btn-toggle
        v-model="toggle"
        divided
      >
        <v-btn @click="accending">昇順</v-btn>
        <v-btn @click="decending">降順</v-btn>
      </v-btn-toggle>
    </div>
    <div class="d-flex flex-wrap flex-row mb-6">
      <BlogIframe
        v-for='blogInfo in pageList[page-1]'
        :key="blogInfo.url"
        :blogInfo="blogInfo"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'; 
  import BlogIframe from '@/components/sub-components/subsub-components/BlogIframe.vue';
  import blogInfoList_RAW from '@/assets/data/BlogData';

  const page = ref(1);
  /* ブログをソートする */
  const blogInfoList = blogInfoList_RAW.sort((a,b) => b.date-a.date);
  
  const accending = () => {
    blogInfoList = blogInfoList_RAW.sort((a,b) => a.date-b.date);
  }
  const decending = () => {
    blogInfoList = blogInfoList_RAW.sort((a,b) => b.date-a.date);
  }

  // 1ページあたりの記事数
  const parPage = 8;

  /* 総ページ数を数える */
  var syou = (blogInfoList.length)/parPage;
  var totalPages;
  if(syou%1 === 0){
    totalPages = Math.floor(syou);
  }else{
    totalPages = Math.floor(syou)+1;
  }

  /* ページ毎にブログを格納する */
  var pageList = [];
  var blogCount=0;
  for(let i=0; i<totalPages; i++){
      pageList[i]=[];
    for(let j=0; j<parPage; j++){
      if(blogCount<blogInfoList.length){
        pageList[i][j] = blogInfoList[blogCount++];
      }
    }
  }
</script>