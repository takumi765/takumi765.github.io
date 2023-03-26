<template>
  <div>
    <div class="text-center">
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
    
  </div>
    <div class="d-flex flex-wrap flex-row mb-6">
      <iframe class="noteCard" src="https://note.com/embed/notes/n3394e5a002c0"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n4f2f57b0ed6b"></iframe>
      <iframe class="hatenaCard" title="nexeで作成した.exeファイルを実行するとすぐに消える問題について" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2023/03/09/185335" frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nab67f5b96218"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n55635715e7f6"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/ncea5b307de6b"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/na8a774887a2c"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nfd04f3e2e1a6"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nd14519e25338"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n7414a040d8bb"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n3ba92d3331fc"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n798b38486d3a"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n0f2c9b87836e"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/ndc5c12ac399f"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nf61848f2d873"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n3abc27c82e7b"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nfba6b991278a"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n4db6195f48ed"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n484de9e3af07"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n40825f09cf78"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n5cbadab3ee9f"></iframe>
      <iframe class="hatenaCard" title="M5Stack用ジョイスティックユニットを使ってみた" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/11/25/181929" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="Fafeicy アーケードゲームボタンキット ゼロディレイアーケードゲーム DIYキットパーツ 10ボタン+ジョイスティック+ USBエンコーダ用 MAME PC　を使用してみる" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/11/22/152720" frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nad9a15a2e860"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n64a7deeb5511"></iframe>
      <iframe class="hatenaCard" title="Vue.jsが反映されない" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/11/18/230057" frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n693852c777f3"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n85c0c9159d39"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n3a8bac4c927e"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n24b4be86dfa3"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n9d7ce9992d4b"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n08cc2e7863cc"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n7579040fb341"></iframe>
      <iframe class="hatenaCard" title="HTML/CSSボタンを自由自在に配置する" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/20/202455" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="ポテンショメーターの値をNode.jsで取得したとき、出力値がおかしい" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/18/165032" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="Arduinoに何もつないでないのにanalogRead()が反応する" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/18/163704" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="COMポート番号を確認する" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/17/170715" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="ポテンショメーターを使ってみる" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/17/143846" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="【Django】フォーム内にボタンを二つ配置し、別々に処理させる" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/16/225345" frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n8f0eb39cdfe9"></iframe>
      <iframe class="hatenaCard" title="【Django】製作したモデルに情報を付加してフロントに渡したい" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/16/220530" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="Djangoのデータベースからランダムでオブジェクトを取り出したい" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/16/210228" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="ファイティングスティック mini for Nintendo SwitchをWindows10 PC で使用する" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/16/164433" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="$git pull でThere is no tracking information for the current branchと怒られる" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/11/112552" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="【Django】登録したdbをブラウザに表示する" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/11/012725" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="【Django】adminサイトの表示からsuperuserの設定まで" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/11/010921" frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nb12ea74aeccd"></iframe>
      <iframe class="hatenaCard" title="Vue.createApp is not a function となったときの対処法" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/06/153413" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="git pushでerror: failed to push some refs to 'github.com:takumi765/Django-Vue.js-Docker_sample.git'となる" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/06/115529" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="Dockerのコンテナ内でDjangoの開発サーバを起動し、ホスト側からアクセスする" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/10/06/011539"  frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n3ece981edd9f"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nbf805f480975"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n2cc99e7aa554"></iframe>
      <iframe class="hatenaCard" title="Docker-composeでdbコンテナが立ち上がらない" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/09/27/201412" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="Windows10でDockerを使う" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/09/27/170116" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="DockerでDjango(Python)の環境構築" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/09/26/181339?_ga=2.90681375.429460996.1664180635-1623497040.1664016557" frameborder="0" scrolling="no"></iframe>
      <iframe class="hatenaCard" title="GitHub PagesでjQuery本体が読み込めない" src="https://hatenablog-parts.com/embed?url=https://challenge-think.hatenablog.com/entry/2022/09/24/202455?_ga=2.35574948.429460996.1664180635-1623497040.1664016557" frameborder="0" scrolling="no"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nedc61c776b2f"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n164148d24e58"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nae1f2d6bc2cc"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n5eac7cc0ea75"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/nab70772c4195"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/n7e5b367a1d0e"></iframe>
      <iframe class="noteCard" src="https://note.com/embed/notes/ne02688412b3e"></iframe>
    </div>
  </div>
</template>

<script>
  // import "https://note.com/scripts/embed.js";
  export default {
    data () {
      return {
        page: 1
      }      
    },
    methods: {
      getNumber: function(number){
        console.log(number);
      }
    }
  }
</script>

<style scoped>
  .noteCard{
    border: 0;
    display: block;
    max-width: 99%;
    width: 250px;
    height: 200px;
    padding: 0px;
    margin: 1% 1% 1% 1%; 
    position: static; 
    visibility: visible;
  }
  .hatenaCard{
    max-width:99%; 
    width: 250px; 
    height: 200px;
    margin: 1% 1% 1% 1%; 
  }
</style>
