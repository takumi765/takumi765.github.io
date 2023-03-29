<template>
  <div>
    <!-- 昇順・降順切り替えボタン -->
    <div v-if="orderType === '降順'" style="color: red;" class="orderChip">
      <v-chip 
        density="compact"
        @click="changeOrder" 
        v-bind:text="orderType"
      ></v-chip>
    </div>
    <div v-if="orderType === '昇順'" style="color: blue;" class="orderChip">
      <v-chip 
        density="compact"
        @click="changeOrder" 
        v-bind:text="orderType"
      ></v-chip>
    </div>

    <!-- ページネーション -->
    <div class="text-center">
      <v-pagination
        v-model="page"
        v-bind:length="totalPages"
        :total-visible="6"
        density=conpact
      ></v-pagination>
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
  import { ref, computed, reactive } from 'vue'; 
  import BlogIframe from '@/components/sub-components/subsub-components/BlogIframe.vue';
  import blogInfoList_RAW from '@/assets/data/BlogData';

  const page = ref(1);

  /* ブログをソートする */
  var blogInfoList = reactive(blogInfoList_RAW.sort((a,b) => b.date-a.date));
  const orderType = ref("降順");

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

  var pageList = reactive([]);
  var blogCount;
  const createPageList = (blogInfoList) => {
    pageList = []
    blogCount = 0;
    for(let i=0; i<totalPages; i++){
        pageList[i]=[];
      for(let j=0; j<parPage; j++){
        if(blogCount<blogInfoList.length){
          pageList[i][j] = blogInfoList[blogCount++];
        }
      }
    }
  }
  /* ページ毎にブログを格納する */
  createPageList(blogInfoList);

  const changeOrder = () => {
    if(orderType.value === "昇順"){
      orderType.value = "降順";
      blogInfoList = blogInfoList_RAW.sort((a,b) => b.date-a.date);
    }else{
      orderType.value = "昇順";
      blogInfoList = blogInfoList_RAW.sort((a,b) => a.date-b.date);
    }
    /* ページ毎にブログを格納する */
    createPageList(blogInfoList);
  }
</script>

<style scoped>
  .orderChip{
    text-align: center;
  }
</style>