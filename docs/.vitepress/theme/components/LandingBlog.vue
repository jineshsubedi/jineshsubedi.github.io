<template class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <ArticleCard 
                                    v-for="(blog, index) in articles" :key="index"
                                    :title="blog.title"
                                    :excerpt="blog.excerpt"
                                    :href="blog.href"
                                    :date="blog.date"
                                    :tag="blog.tag"
                        />
                        
                  </div>
            </div>
      </div>
</template>
<script setup>
import { data } from '../blog.data'

const props = defineProps(['perPage'])

const articles = data.ARTICLES.slice(0, props.perPage);

</script>
