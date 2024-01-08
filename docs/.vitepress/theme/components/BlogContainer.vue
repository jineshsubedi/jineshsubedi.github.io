<template class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <ArticleCard v-for="(blog, index) in paginatedItems" :key="index" :title="blog.title"
                              :excerpt="blog.excerpt" :href="blog.href" :date="blog.date" :tag="blog.tag" />

                  </div>
            </div>
            <div>
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
      </div>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { data } from '../blog.data'

const props = defineProps(['perPage'])

const articles = ref(data.ARTICLES);

const itemsPerPage = ref(props.perPage);
const currentPage = ref(1);

const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return articles.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(articles.value.length / itemsPerPage.value));

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

