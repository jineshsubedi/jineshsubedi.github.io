<template>
      <div>
            <ForexConversion :datas="forexs" v-if="forexs.length > 0"/>
            <table class="table-auto">
                  <thead>
                        <tr>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Unit</th>
                              <th>Iso</th>
                              <th>Buy</th>
                              <th>Sell</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr v-for="(forex, index) in forexs" :key="index">
                              <td>{{ forex.name }}</td>
                              <td>{{ forex.iso3 }}</td>
                              <td>{{ forex.date }}</td>
                              <td>{{ forex.unit }}</td>
                              <td>{{ forex.buy }}</td>
                              <td>{{ forex.sell }}</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

var forexs = ref([]);

fetchData();

function fetchData() {
      axios.get('https://www.nrb.org.np/api/forex/v1/app-rate')
            .then(response => {
                  forexs.value = response.data
                  // console.log(forexs);
            })
            .catch(error => {
                  console.error('Error fetching data:', error);
            });
}
</script>