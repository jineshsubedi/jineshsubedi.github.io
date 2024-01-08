<template>
      <a :href="href"
            class="bg-white xl:flex-grow-0 w-full xl:w-[38rem] p-3 border-2 rounded-2xl hover:border-sky-500">
            <article class="flex max-w-xl flex-col items-start justify-between">
                  <div class="flex items-center gap-x-4 text-xs">
                        <Tag :title="tag" />
                  </div>
                  <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <a :href="href">
                                    <span class="absolute inset-0"></span>
                                    {{ title }}
                              </a>
                        </h3>
                        <div class="mt-3 flex items-center gap-x-4 text-xs">
                              <time datetime="{{ formattedDate }}" class="text-gray-500"><b>{{ formattedDate }}</b></time>
                        </div>
                        
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ excerpt }}</p>
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
            excerpt: {
                  type: String,
                  required: true,
            },
            image: {
                  type: String,
                  required: false,
            },
            date: {
                  type: String,
                  required: true,
            },
            href: {
                  type: String,
                  required: true,
            },
            tag: {
                  type: String,
                  required: false,
            }
      },
      computed: {
            formattedDate() {
                  const rawDate = new Date(this.date);

                  // Get day, month, and year
                  const day = rawDate.getDate();
                  const month = rawDate.toLocaleString('default', { month: 'short' });
                  const year = rawDate.getFullYear().toString();

                  // Construct the formatted date
                  return `${day} ${month.toUpperCase()} ${year}`;
            }
      }
};
</script>