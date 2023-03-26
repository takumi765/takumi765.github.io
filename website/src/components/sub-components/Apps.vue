<template>
  <div>
    <div class="d-flex flex-wrap flex-row mb-6">
      <v-card
        v-for="item in appInfos"
        :key="item.title"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              <!-- badgeを動的に入れたい -->
              <a v-html="item.type"></a>
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
  </div>
</template>

<script>
export default {
  data (){
    return {
      appInfos: [
        {
          type   : `<v-badge color="info" content="便利アプリ" inline></v-badge>`,
          title  : "復習テストアプリ",
          detail : "テストを登録・修正・削除をすることができます。登録済みテストを科目ごとにランダムに出題し苦手な問題を割り出すことが出来ます。",
          appUrl : `<a href="http://54.248.134.52/login/">こちら</a>`,
          blogUrl: `<a href="https://note.com/good_echium475/m/m6ef56a7ba8c2">こちら</a>`,
        },
        {
          type   : `<v-badge color="info" content="便利アプリ" inline></v-badge>`,
          title  : "復習テストアプリ",
          detail : "テストを登録・修正・削除をすることができます。登録済みテストを科目ごとにランダムに出題し苦手な問題を割り出すことが出来ます。",
          appUrl : ``,
          blogUrl: `<a href="https://note.com/good_echium475/m/m6ef56a7ba8c2">こちら</a>`,
        },
        {
          type   : `<v-badge color="info" content="便利アプリ" inline></v-badge>`,
          title  : "復習テストアプリ",
          detail : "テストを登録・修正・削除をすることができます。登録済みテストを科目ごとにランダムに出題し苦手な問題を割り出すことが出来ます。",
          appUrl : ``,
          blogUrl: ``,
        },
      ]
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
