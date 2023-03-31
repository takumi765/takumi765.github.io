<template>
  <div class="body">
    <h1 style="padding-top: 7%;">About</h1>
    エンジニアを目指す関西出身の学生です。<br>
    大学ではVR関連の研究をしています。<br>
    
    <div>
      <div class="d-flex flex-wrap mb-6">
        <v-sheet class="ma-1 pa-1">
          <img class="profImg" src="../assets/img/profile.jpg">
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
                v-for="item in infoList"
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
    <div>
      <ul class="d-flex flex-wrap mb-6 account">
        <li 
          v-for="item in accountList_RAW"
          :key="item.name"
        >
          <v-chip 
            v-bind:color="item.color"
            v-bind:href="item.accountURL"
            target="_blank"
          >
            {{ item.name }}
          </v-chip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import accountList_RAW from '@/assets/data/AccountData';
  import infoList from '@/assets/data/ProfileData';
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
  .account{
    text-decoration: none;
    list-style: none;
  }
  li{
    margin: 1% 1%;
  }
</style>
