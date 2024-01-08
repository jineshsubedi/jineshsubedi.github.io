<template class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="bg-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <VideoCard v-for="(video, index) in paginatedItems" :key="index" :title="video.title"
                              :href="video.href" :image="video.image" />

                  </div>
            </div>
            <div class="text-center mt-10 mb-10">
                  <nav aria-label="Page navigation example">
                        <ul class="inline-flex -space-x-px text-sm">
                              <li>
                                    <a href="#"
                                          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                          @click="prevPage" :disabled="currentPage === 1">Previous</a>
                              </li>
                              <li>
                                    <a href="#"
                                          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Page
                                          {{ currentPage }} of {{ totalPages }}</a>
                              </li>
                              <li>
                                    <a href="#"
                                          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                          @click="nextPage" :disabled="currentPage === totalPages">Next</a>
                              </li>
                        </ul>
                  </nav>
            </div>
      </div>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const videos = ref([
      {
            title: "Yajra Datatables",
            href: "https://www.youtube.com/watch?v=N69ZOg59exs",
            image: "https://img.youtube.com/vi/N69ZOg59exs/hqdefault.jpg",
      },
      {
            title: "Laravel Google 2FA Authentication Tutorial",
            href: "https://www.youtube.com/watch?v=IkfzS96Y3Wk",
            image: "https://img.youtube.com/vi/IkfzS96Y3Wk/hqdefault.jpg",
      },
      {
            title: "Chat Application under 15 min | Laravel | Chatify | Pusher | EASY Tutorial",
            href: "https://www.youtube.com/watch?v=TDDRGULKfv0",
            image: "https://img.youtube.com/vi/TDDRGULKfv0/hqdefault.jpg",
      },
      {
            title: "captcha | Laravel 10 | Validate form using Captcha",
            href: "https://www.youtube.com/watch?v=ldoVDJ7gP8s",
            image: "https://img.youtube.com/vi/ldoVDJ7gP8s/hqdefault.jpg",
      },
      {
            title: "laravel 9 | Next js | Setup Tutorial",
            href: "https://www.youtube.com/watch?v=f7vucFXxEPo",
            image: "https://img.youtube.com/vi/f7vucFXxEPo/hqdefault.jpg",
      },
      {
            title: "Laravel 9 || Breeze API || Next.js || Demo.",
            href: "https://www.youtube.com/watch?v=awVsuMgXEBs",
            image: "https://img.youtube.com/vi/awVsuMgXEBs/hqdefault.jpg",
      },
      {
            title: "Build a ChatGPT clone using the new OpenAI Chat API || Laravel 10 || Tutorial",
            href: "https://www.youtube.com/watch?v=hyt1ohOwayE",
            image: "https://img.youtube.com/vi/hyt1ohOwayE/hqdefault.jpg",
      },
      {
            title: "Laravel 10 | Filament | Get Started | Crud Operation | Tutorial",
            href: "https://www.youtube.com/watch?v=Xiqgd3eyOEc",
            image: "https://img.youtube.com/vi/Xiqgd3eyOEc/hqdefault.jpg",
      },
      {
            title: "Code GPT | Installation | Usage | Examples | Easy Tutorial",
            href: "https://www.youtube.com/watch?v=-RAurRYRgsI",
            image: "https://img.youtube.com/vi/-RAurRYRgsI/hqdefault.jpg",
      },
      {
            title: "Laravel 10 | Password Less Authentication | Tutorial | Concept | Example",
            href: "https://www.youtube.com/watch?v=cQvdPFF6FmM",
            image: "https://img.youtube.com/vi/cQvdPFF6FmM/hqdefault.jpg",
      },
      {
            title: "Laravel 9 | Project Startup | Email Verification | Password Reset",
            href: "https://www.youtube.com/watch?v=8hqQNeFJzbk",
            image: "https://img.youtube.com/vi/8hqQNeFJzbk/hqdefault.jpg",
      },
      {
            title: "Laravel 9 Maintenance Mode | Usages of maintenance feature | Tutorial",
            href: "https://www.youtube.com/watch?v=aJxBay91638",
            image: "https://img.youtube.com/vi/aJxBay91638/hqdefault.jpg",
      },
      {
            title: "Laravel 9 Routes with Example and Concept Overview",
            href: "https://www.youtube.com/watch?v=ef7pj-GsVf8",
            image: "https://img.youtube.com/vi/ef7pj-GsVf8/hqdefault.jpg",
      }
]);

const itemsPerPage = ref(6);
const currentPage = ref(1);

const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return videos.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(videos.value.length / itemsPerPage.value));

onMounted(() => {
      updatePagination();
});

onBeforeUnmount(() => {
      // Cleanup if needed
});

function updatePagination() {
      currentPage.value = 1;
}

function prevPage() {
      if (currentPage.value > 1) {
            currentPage.value--;
      }
}

function nextPage() {
      if (currentPage.value < totalPages.value) {
            currentPage.value++;
      }
}
</script>