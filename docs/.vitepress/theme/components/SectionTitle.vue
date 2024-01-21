<template>
      <div class="position-relative d-flex align-items-center justify-content-center pt-10 mt-10">
            <h1 class="position-absolute text-uppercase text-primary">{{ title_front }}</h1>
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">{{ title_back }}</h1>
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
<style scoped>
.position-relative {
      position: relative !important;
}

.align-items-center {
      align-items: center !important;
}

.justify-content-center {
      justify-content: center !important;
}

.d-flex {
      display: flex !important;
}

.text-white {
      color: #fff !important;
}

.text-uppercase {
      text-transform: uppercase !important;
}

.display-1 {
      font-size: 100px;
      font-weight: 300;
      line-height: 1.2;
}

.text-primary {
      color:steelblue;
}

.text-uppercase {
      text-transform: uppercase !important;
}

.position-absolute {
      position: absolute !important;
}

h1,
.font-weight-bolder {
      font-weight: 900 !important;
}

h1,
.h1 {
      font-size: 2.5rem;
}
</style>