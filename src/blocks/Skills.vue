<template>
  <div class="block-info mt-5">
    <div class="block-info__title">Compétences</div>
    <div class="block-info__separator"></div>
    <SkillRate
      v-for="(skill, index) in skills"
      v-bind:key="index"
      :name="skill.name"
      :rating="skill.rate"
    ></SkillRate>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import SkillRate from "../components/Progress.vue";
import { Skill } from "../interfaces/CV";

export default {
  components: {
    SkillRate,
  },
  props: {
    skills: {
      type: Object as PropType<Skill[]>,
    },
  },
};
</script>

<style lang="scss">
.content-skill {
  position: relative;
  margin-bottom: 10px;

  .name {
    font-weight: bold;
  }

  .level {
    position: absolute;
    top: 0px;
    right: 0;
  }
}
</style>
