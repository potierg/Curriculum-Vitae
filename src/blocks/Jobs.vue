<template>
  <div class="block-info mt-5">
    <div class="block-info__title">Expérience professionnelle</div>
    <div class="block-info__separator"></div>
    <div
      v-for="(job, index) in jobs"
      v-bind:key="index"
      class="block-info__content content-job mb-5"
    >
      <p class="job">{{ job.title }}</p>
      <p class="company">{{ job.company }}, {{ job.city }}</p>
      <p class="date">de {{ job.date.dateStart }} à {{ job.date.dateEnd }}</p>
      <p class="description" v-html="job.description"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Job } from "../interfaces/CV";
export default {
  props: {
    jobs: {
      type: Object as PropType<Job[]>,
    },
  },
};
</script>

<style lang="scss">
.content-job {
  color: black;
  position: relative;

  .job {
    font-weight: bold;
  }

  .date {
    position: absolute;
    top: 0px;
    right: 0;
    font-weight: bold;
    color: #3a5b87;
  }

  .company {
    color: #3a5b87;
    font-size: 30px;
  }

  .description {
  }

  .skills {
  }

  &.mt {
    margin-top: 45px;
  }
}
</style>
