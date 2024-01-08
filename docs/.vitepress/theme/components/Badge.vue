<template>
      <Badge v-for="(singleTitle, index) in titlesArray" :key="index" :type="type">{{ singleTitle }}</Badge>
</template>
<script>
export default {
      props: {
            title: {
                  type: String,
                  required: true,
            },
            type: {
                  type: String,
                  required: true
            }
      },
      computed: {
            titlesArray() {
                  // Split the title by ',' and filter out empty values
                  return this.title.split(',').filter(title => title.trim() !== '');
            },
      },
}
</script>