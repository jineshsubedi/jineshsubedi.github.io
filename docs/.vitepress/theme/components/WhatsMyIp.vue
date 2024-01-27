<template>
      <div v-if="ipdetail.ip">
            <h3>IPv4: {{ ipv4.ip }}</h3>
            <h3>IPv6: {{ ipdetail.ip }}</h3>
            <h3>ISP: {{ ipdetail.org }}</h3>
            <p>
                  {{ ipdetail.city + ', ' + ipdetail.region + ', ' + ipdetail.country_name }}
            </p>
      </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

var ipdetail = ref({});
var ipv4 = ref('');

fetchIpv4Data()
function fetchIpv4Data() {
      axios.get('https://api.ipify.org/?format=json')
            .then(res => {
                  ipv4.value = res.data
                  fetchIpData();
            })
            .catch(err => {
                  console.error('Error fetching data:', err);
            })
}

function fetchIpData() {
      axios.get('https://ipapi.co/json')
            .then(response => {
                  ipdetail.value = response.data
            })
            .catch(error => {
                  console.error('Error fetching data:', error);
            });
}

</script>