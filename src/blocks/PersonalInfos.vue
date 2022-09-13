<template>
  <div class="block-info">
    <div class="block-info__title">Informations personnelles</div>
    <div class="block-info__separator"></div>

    <div
      v-for="(info, index) in infos"
      v-bind:key="index"
      class="block-info__content content-infos mb-5"
    >
      <v-icon class="icon">{{ info.icon }}</v-icon>
      <p v-if="!info.type">{{ info.value }}</p>
      <a v-if="info.type === 'email'" :href="'mailto:' + info.value">{{
        info.value
      }}</a>
      <a v-if="info.type === 'tel'" :href="'tel:' + info.value">{{
        info.value
      }}</a>
      <a v-if="info.type === 'link'" class="link" :href="info.value">
        {{ info.value }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { PersonalInfos } from "../interfaces/CV";
export default {
  props: {
    infos: {
      type: Object as PropType<PersonalInfos[]>,
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
