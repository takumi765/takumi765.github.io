<template>
  <div class="body">
    <h1>About</h1>
    エンジニアを目指す関西出身の学生です。<br>
    大学ではVR関連の研究をしています。<br>
    
    <div>
      <div class="d-flex flex-wrap mb-6">
        <v-sheet class="ma-1 pa-1">
          <img class="profImg" src="../assets/profile.jpg">
        </v-sheet>
        <v-sheet class="ma-1 pa-1">
          <v-table density="compact">
            <thead>
              <tr>
                <th width=120px class="text-left">
                  Category
                </th>
                <th class="text-left">
                  Content
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in info"
                :key="item.category"
              >
                <td>{{ item.category }}</td>
                <td>{{ item.content }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        info: [
          {
            category: "名前",
            content : "岩﨑琢己",
          },
          {
            category: "所属",
            content : "大阪大学 基礎工学研究科",
          },
          {
            category: "趣味",
            content : "旅行、サッカー、サイクリング",
          },
          {
            category: "開発チーム",
            content : "Nebore（ネボア）",
          },
        ],
      }
    },
  }
</script>

<style scoped>
  h1{
    text-align: left;
  }
  .v-sheet{
    background-color: transparent;
  }
  .v-table{
    background-color: transparent;
  }
  .profImg{
    margin-top: 15px;
    width: 200px;
    border-radius: 20%;
  }
</style>
