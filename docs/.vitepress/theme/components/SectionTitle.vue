<template>
      <div :class="class">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">{{ title_back }}</h1>
            <h1 class="position-absolute text-uppercase text-primary">{{ title_front }}</h1>
      </div>
</template>
<script>
export default {
      props: {
            title_back: {
                  type: String,
                  required: true,
            },
            title_front: {
                  type: String,
                  required: true,
            },
            class: {
                  type: String,
                  required: false
            }
      },
};
</script>