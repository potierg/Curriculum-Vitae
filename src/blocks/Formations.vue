<template>
  <div class="block-info mt-5">
    <div class="block-info__title">Diplôme</div>
    <div class="block-info__separator"></div>
    <div
      v-for="(degree, index) in degrees"
      v-bind:key="index"
      class="block-info__content content-formation mb-5"
    >
      <p class="formation">{{ degree.title }}</p>
      <p class="date">
        de {{ degree.date.dateStart }} à {{ degree.date.dateEnd }}
      </p>
      <p class="school">{{ degree.school }}, {{ degree.city }}</p>
      <p class="description"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Degree } from "../interfaces/CV";

export default {
  props: {
    degrees: {
      type: Object as PropType<Degree>,
    },
  },
};
</script>

<style lang="scss">
.content-formation {
  color: black;
  position: relative;

  .formation {
    font-weight: bold;
  }

  .date {
    position: absolute;
    top: 0px;
    right: 0;
    font-weight: bold;
    color: #3a5b87;
  }

  .school {
    color: #3a5b87;
    font-size: 30px;
  }

  .description {
  }
}
</style>
