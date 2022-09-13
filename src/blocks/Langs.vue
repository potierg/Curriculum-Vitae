<template>
  <div class="block-info">
    <div class="block-info__title">Langues</div>
    <div class="block-info__separator"></div>
    <Lang
      v-for="(lang, index) in langs"
      v-bind:key="index"
      :name="lang.lang"
      :rating="lang.rate"
    >
    </Lang>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Langs } from "../interfaces/CV";
import Lang from "./Lang.vue";

export default {
  components: {
    Lang,
  },
  props: {
    langs: {
      type: Object as PropType<Langs[]>,
    },
  },
};
</script>

<style lang="scss">
.content-infos {
  display: flex;
  align-items: center;

  .icon {
    color: #3a5b87;
  }

  a {
    margin-left: 25px;
  }

  p {
    font-size: 30px;
    margin-left: 25px;
    vertical-align: middle;
  }
}
</style>
