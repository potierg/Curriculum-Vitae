<template>
  <PersonalInfos v-if="block.type == 0" :infos="block.infos"></PersonalInfos>
  <Langs v-if="block.type == 1" :langs="block.langs"></Langs>
  <Profile v-if="block.type == 2" :description="block.description"></Profile>
  <Degree v-if="block.type == 3" :degrees="block.degrees"></Degree>
  <Jobs v-if="block.type == 4" :jobs="block.jobs"></Jobs>
  <Skills v-if="block.type == 5" :skills="block.skills"></Skills>
  <Trainings v-if="block.type == 6" :trainings="block.trainings"></Trainings>
</template>

<script lang="ts">
import PersonalInfos from "./PersonalInfos.vue";
import Langs from "./Langs.vue";
import Profile from "./Profile.vue";
import Degree from "./Formations.vue";
import Jobs from "./Jobs.vue";
import Skills from "./Skills.vue";
import Trainings from "./Trainings.vue";

import { PropType } from "@vue/runtime-core";
import { CVBlock } from "../interfaces/CV";

export default {
  components: {
    PersonalInfos,
    Langs,
    Profile,
    Degree,
    Jobs,
    Skills,
    Trainings,
  },
  props: {
    block: {
      type: Object as PropType<CVBlock>,
    },
  },
};
</script>
