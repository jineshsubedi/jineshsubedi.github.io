<template>
            <a :href="href" target="_blank" class="xl:flex-grow-0 p-3 border-2 rounded-2xl hover:border-sky-500">
                  <article class="flex max-w-xl flex-col items-start justify-between">
                  <div class="flex items-center gap-x-4 text-xs">
                        <img :src="image" alt="{{ title }}">
                  </div>
                  <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <a :href="href" target="_blank">
                                    <span class="absolute inset-0"></span>
                                    {{ title }}
                              </a>
                        </h3>
                  </div>
            </article>
      </a>
</template>
<script>
export default {
      props: {
            title: {
                  type: String,
                  required: true,
            },
            image: {
                  type: String,
                  required: false,
            },
            href: {
                  type: String,
                  required: true,
            }
      }
};
</script>