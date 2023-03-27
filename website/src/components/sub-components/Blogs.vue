<template>
  <div>
    <!-- <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
      <v-window v-model="page">
        <v-window-item value="page">
          123
        </v-window-item>

        <v-window-item value="page">
          Apps
        </v-window-item>
      </v-window>
    </v-container>
    
  </div> -->
    <div class="d-flex flex-wrap flex-row mb-6">
      <BlogIframe
        v-for='blogInfo in blogInfoList'
        :key="blogInfo.url"
        :blogInfo="blogInfo"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'; 
  import BlogIframe from '@/components/sub-components/BlogIframe.vue';

  const page = ref(1);
  const blogInfoList = [
    {
      date : 20230315,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n4f2f57b0ed6b",
    },
    {
      date : 20230121,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nab67f5b96218",
    },
    {
      date : 20230111,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n55635715e7f6",
    },
    {
      date : 20230104,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/ncea5b307de6b",
    },
    {
      date : 20221225,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/na8a774887a2c",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nfd04f3e2e1a6",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nd14519e25338",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n7414a040d8bb",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n3ba92d3331fc",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n798b38486d3a",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n0f2c9b87836e",
    },
    {
      date : 20221224,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/ndc5c12ac399f",
    },
    {
      date : 20221221,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nf61848f2d873",
    },
    {
      date : 20221021,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n3abc27c82e7b",
    },
    {
      date : 20221221,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nfba6b991278a",
    },
    {
      date : 20221220,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n4db6195f48ed",
    },
    {
      date : 20221218,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n484de9e3af07",
    },
    {
      date : 20221218,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n40825f09cf78",
    },
    {
      date : 20221214,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n5cbadab3ee9f",
    },
    {
      date : 20221126,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nad9a15a2e860",
    },
    {
      date : 20221120,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n64a7deeb5511",
    },
    {
      date : 20221116,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n693852c777f3",
    },
    {
      date : 20221113,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n85c0c9159d39",
    },
    {
      date : 20221110,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n3a8bac4c927e",
    },
    {
      date : 20221110,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n24b4be86dfa3",
    },
    {
      date : 20221025,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n9d7ce9992d4b",
    },
    {
      date : 20221023,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n08cc2e7863cc",
    },
    {
      date : 20221021,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n7579040fb341",
    },
    {
      date : 20221016,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n8f0eb39cdfe9",
    },
    {
      date : 20221009,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nb12ea74aeccd",
    },
    {
      date : 20221005,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n3ece981edd9f",
    },
    {
      date : 20221004,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nbf805f480975",
    },
    {
      date : 20220328,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n2cc99e7aa554",
    },
    {
      date : 20220324,
      type : "hatena",
      title: "GitHub PagesでjQuery本体が読み込めない",
      url  : "https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/09/24/202455?_ga=2.35574948.429460996.1664180635-1623497040.1664016557",
    },
    {
      date : 20220324,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nedc61c776b2f",
    },
    {
      date : 20220923,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nedc61c776b2f",
    },
    {
      date : 20220920,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n164148d24e58",
    },
    {
      date : 20220919,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n5eac7cc0ea75",
    },
    {
      date : 20220912,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/nab70772c4195",
    },
    {
      date : 20220908,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/n7e5b367a1d0e",
    },
    {
      date : 20220905,
      type : "note",
      title: "",
      url  : "https://note.com/embed/notes/ne02688412b3e",
    },
  ]
</script>