<template>
      <a v-for="(singleTitle, index) in titlesArray" :key="index" href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {{ singleTitle }}
      </a>
</template>
<script>
export default {
      props: {
            title: {
                  type: String,
                  required: true,
            },
      },
      computed: {
            titlesArray() {
                  // Split the title by ',' and filter out empty values
                  return this.title.split(',').filter(title => title.trim() !== '');
            },
      },
}
</script>