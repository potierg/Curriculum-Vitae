<template>
  <div class="block-info mt-5">
    <div class="block-info__title">Formations</div>
    <div class="block-info__separator"></div>
    <div
      v-for="(training, index) in trainings"
      v-bind:key="index"
      class="block-info__content content-trainings mb-10"
    >
      <p class="title">{{ training.title }}</p>
      <p class="time">{{ training.time }}h</p>
      <p class="description" v-html="training.description"></p>
      <img :src="training.picture" class="picture" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Training } from "../interfaces/CV";
export default {
  props: {
    trainings: {
      type: Object as PropType<Training[]>,
    },
  },
};
</script>

<style lang="scss">
.content-trainings {
  position: relative;
  .title {
    font-size: 35px;
    font-weight: bold;
    margin-left: 260px;
    margin-right: 60px;
  }

  .time {
    position: absolute;
    top: 60px;
    right: 0;
    font-weight: bold;
    color: #3a5b87;
  }

  .description {
    margin-left: 260px;
    margin-right: 60px;
  }

  .picture {
    position: absolute;
    top: 10px;
    left: 0;
  }
}
</style>
