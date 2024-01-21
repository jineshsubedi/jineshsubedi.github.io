<template cass="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="card">
            <div class="card-body">
                  <div class="mx-auto max-w-7xl">
                        <div class="mx-auto grid max-w-2xl grid-cols-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                              <div>
                                    <h3>Please Input Valid Youtube URL</h3>
                                    <div class="position-relative flex d-flex align-items-center justify-content-center">
                                          <input type="text" :class="normalInput" v-model="url">
                                          <button class="convert" @click="fetchData()">Convert</button>
                                    </div>
                                    <p v-if="!status" class="text-error">Invalid URL</p>
                              </div>
                              <div class="ytinfo" v-if="result.title">
                                    <div class="flex d-flex">
                                          <img :src="generateThumbnailUrl()" alt="">
                                          <div style="padding: 10px;">
                                                <h3><b>{{ result.title }}</b></h3>
                                                <h4><b>{{ result.size }}</b></h4>
                                                <br>
                                                <a :href="result.link" target="_blank" class="downloadBtn">
                                                      Download
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <div v-if="loading" class="flex d-flex">
                                    <div style="padding:10px">
                                          <img src="https://fut7.pt/wp-content/plugins/appspinner/assets/images/gif-loader.gif"
                                                alt="loading gif" width="50%">
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

var url = ref('https://www.youtube.com/watch?v=sanElvgQWPQ');
var loading = ref(false);
var result = ref({});
var normalInput = 'form-input ml-10'
var status = true
var type = ref('mp3');

function extractVideoId() {
      const match = url.value.match(/v=([a-zA-Z0-9_-]{11})/);
      return match ? match[1] : null;
}
function generateThumbnailUrl() {
      const videoId = this.extractVideoId();
      if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

      }
      return '';
}
function validateYoutubeUrl() {
      const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

      return youtubeRegex.test(url.value);
}
function fetchData() {
      loading.value = true;
      result.value = {}
      status = this.validateYoutubeUrl()
      if (status) {
            axios.get('https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=' + url.value, {
                  headers: {
                        'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
                        'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
                  }
            })
                  .then(response => {
                        result.value = response.data
                        normalInput = 'form-input ml-10';
                        console.log(result.value)

                  })
                  .catch(error => {
                        console.error('Error fetching data:', error);
                  })
                  .finally(() => {
                        loading.value = false;
                  })
      } else {
            normalInput = 'form-input ml-10 red-border'
      }

}

</script>
<style scoped>
.card {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, .125);
      border-radius: 0.25rem;
      color: black;
}

.card-header:first-child {
      border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-header {
      padding: 0.75rem 1.25rem;
      margin-bottom: 0;
      background-color: rgba(0, 0, 0, .03);
      border-bottom: 1px solid rgba(0, 0, 0, .125);
}

.card-body {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      padding: 1.25rem;
}

*,
::after,
::before {
      box-sizing: border-box;
}

h3 {
      padding: 0.375rem 0.75rem;
}

.text-error {
      padding: 0.375rem 0.75rem;
      color: red;
}

.form-input {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.ml-10 {
      margin-left: 10px;
}

.convert {
      padding: 10px;
      border: 1px solid green;
      color: green;
}

.convert:hover {
      padding: 10px;
      border: 1px solid blue;
      color: blue;
}

.ytinfo {
      padding: 10px;
}

.ytinfo img {
      width: 50%;
}

.downloadBtn {
      border: 1px solid red;
      padding: 8px 15px;
      border-radius: 5px;
      color: red;
}
</style>