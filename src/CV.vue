<template>
  <CV :cv-data="cvData"></CV>
</template>

<script lang="ts">
import CV from "./components/CV.vue";
import cvData from "./cv/CV-GP";

export default {
  components: {
    CV,
  },
  data() {
    return {
      cvData,
    };
  },
};
</script>
