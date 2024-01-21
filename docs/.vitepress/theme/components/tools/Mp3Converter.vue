<template>
      <div class="container">
            <div class="grid-2">
                  <div class="col-md-6">ABOUT</div>
                  <div class="col-md-6">VIDEO</div>
            </div>
      </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';


fetchData();

function fetchData() {
      axios.get('https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=https://www.youtube.com/watch?v=RLzC55ai0eo', {
            headers: {
                  'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
                  'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
            },
      })
            .then(response => {
                  var forexs = response.data
                  console.log(forexs);
            })
            .catch(error => {
                  console.error('Error fetching data:', error);
            });
}

</script>