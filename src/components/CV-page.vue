<template>
  <div v-if="!currentPage || currentPage == pageNb" class="a4 center">
    <div class="left grey-section">
      <div class="full-relative">
        <div class="section-header" :class="{ small: !$slots['left-section'] }">
          <p class="bold title">Guillaume POTIER</p>
          <p>Développeur Fullstack JS/TS</p>
        </div>
        <div class="section-header after"></div>

        <slot name="left-section"> </slot>

        <div class="section-header before-end"></div>
        <div class="section-header end"></div>
      </div>
    </div>

    <div class="body-section">
      <slot name="body-section"> </slot>

      <!--<p class="text-center mt pagination">Page {{ pageNb }}/{{ maxPageNb }}</p>-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    pageNb: {
      type: Number,
      required: true,
    },
    maxPageNb: {
      type: Number,
      required: true,
    },
  },
  data(): {
    currentPage: Number | null;
  } {
    return {
      currentPage: null,
    };
  },
  mounted() {
    if (this.$route.query.page) {
      this.currentPage = this.$route.query.page;
    }
  },
};
</script>

<style lang="scss">
.body-section {
  width: 100%;
  height: 100%;
  padding: 45px;
  padding-top: 50px !important;
  padding-bottom: 15px;
}

.grey-section {
  border-top-left-radius: 20px;
  width: 100%;
  display: flex;
  background-color: #e6e6e6;

  .full-relative {
    position: relative;
    width: 100%;
  }

  .section-header {
    text-align: center;
    padding-top: 25px;

    height: 230px;
    width: 100%;
    border-top-left-radius: 20px;
    background: #3a5b87;

    &.small {
      height: 130px;
    }

    p {
      color: white;
      font-size: 35px;
    }

    &.after {
      height: 50px;
      border-top-left-radius: 0;
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 50%;
    }

    &.before-end {
      height: 50px;
      position: absolute;
      bottom: 75px;
      border-top-left-radius: 0;
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 50%;
      background: #e6e6e6;
      z-index: 10;
    }

    &.end {
      position: absolute;
      bottom: 0;
      height: 100px;

      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 20px;
    }
  }
}
</style>
