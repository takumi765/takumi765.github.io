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
          v-for="item in news"
          :key="item.date"
        >
          <td>{{ item.date }}</td>
          <td v-html="item.title"></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        news: [
          {
            date : "2023.03.24",
            title: `<a href="https://takumi765.github.io/" target=_blank>Webサイト</a>をリニューアルしました`,
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .v-table thead{
    background-color: rgb(231, 231, 255);
  }
</style>