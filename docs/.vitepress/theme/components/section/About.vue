<template class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl" id="vid2mp3">
      <div class="p-1 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h3>Please insert a valid YouTube video URL</h3>

            <div class="flex flex-col md:flex-row pb-4 mb-4 converter">
                  <div class="flex-1">
                        <div class="flex flex-col md:flex-row">
                              <div class="w-full flex-1 mx-2">
                                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                          <input type="url" v-model="url" id="currency_two"
                                                placeholder="https://www.youtube.com/watch?v=N69ZOg59exs"
                                                class="p-1 px-2 appearance-none outline-none w-full text-gray-800 ">
                                    </div>
                                    <button @click="fetchData()" class="button">CONVERT</button>
                              </div>
                        </div>
                        <div v-if="loading">LOADING</div>
                        <div v-else>
                              <div class="md:flex-row text-center"
                                    style="margin-top: 2.3rem; margin-left: 50px;" v-if="result.title">
                                    <!-- <img :src="image_banner" alt="banner" style="width: 20%" /> -->
                                    <h3>{{ result.title }}</h3>
                                    <p>{{ result.size }} MB</p>
                                    <a :href="result.link" target="_blank" rel="noopener noreferrer">
                                          <img src="https://img.icons8.com/nolan/64/apple-music.png" alt="" srcset="">
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>

      </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

var url = ref('');
var loading = ref(false);
var result = ref({});
var image_banner = ref('images/mp3_banner.webp');


function fetchData() {
      loading.value = true;
      axios.get('https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=' + url.value, {
            headers: {
                  'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
                  'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
            },
      })
            .then(response => {
                  result.value = response.data
                  console.log(result.value)
            })
            .catch(error => {
                  console.error('Error fetching data:', error);
            })
            .finally(() => {
                  loading.value = false;
            })
}

</script>