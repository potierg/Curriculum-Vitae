<template>
  <CVPage
    v-for="page in pages"
    v-bind:key="page"
    class="cv-page"
    :pageNb="page"
    :maxPageNb="maxPageNb"
  >
    <template v-slot:left-section>
      <div
        v-if="page === 1"
        class="profile-picture"
        style="background-repeat: no-repeat; background-size: 100%"
        :style="{
          'background-image': 'url(' + cvData.profileInfo.picture + ')',
        }"
      ></div>
      <div class="section-panel">
        <v-container
          v-for="leftBlock of cvData.leftSection"
          v-bind:key="leftBlock.block.type"
          class="p0"
        >
          <CVBlock
            v-if="leftBlock.page === page"
            :block="leftBlock.block"
          ></CVBlock>
        </v-container>
      </div>
    </template>
    <template v-slot:body-section>
      <v-container
        v-for="content of cvData.content"
        v-bind:key="content.block.type"
        class="p0"
      >
        <CVBlock v-if="content.page === page" :block="content.block"></CVBlock>
      </v-container>
      <!--<div v-if="page === maxPageNb" style="height: 1000px"></div>-->
    </template>
  </CVPage>
</template>

<script lang="ts">
import CVPage from "../components/CV-page.vue";
import { PropType } from "@vue/runtime-core";
import { CVInterface } from "../interfaces/CV";
import CVBlock from "../blocks/CVBlock.vue";

export default {
  components: {
    CVBlock,
    CVPage,
  },
  props: {
    cvData: {
      type: Object as PropType<CVInterface>,
    },
  },
  data() {
    return {
      pages: [1],
      maxPageNb: 1,
    };
  },
};
</script>

<style lang="scss">
.block-info {
  background-color: transparent;
  height: auto;
  width: 100%;

  &__title {
    font-size: 35px;
    color: #3a5b87;
  }
  &__separator {
    border-bottom: solid #d2d2d2 2px;
    margin-bottom: 25px;
  }
  &__content {
    font-size: 25px;
  }
}

.profile-picture {
  border-radius: 100%;
  border: solid 10px #c8c8c8;
  margin: auto;
  position: relative;
  background: red;
  top: -130px;
  width: 300px;
  height: 300px;
}

.section-panel {
  position: relative;
  top: -125px;
  background-color: transparent;
  height: calc(100% - 560px);
  width: 100%;
  padding-top: 25px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
}

.a4 {
  border-radius: 20px;
  width: 1700px;
  display: grid;
  overflow: hidden;
  grid-template-columns: 35% 65%;
  grid-auto-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 5px;
}

.center {
  margin: auto;
}
.left {
  float: left;
}
.right {
  float: right;
}
.bold {
  font-weight: bold;
}
.title {
  font-size: 55px;
}
.pagination {
  font-weight: bold;
  font-size: 25px;
}
.p0 {
  padding: 0 !important;
}
</style>
