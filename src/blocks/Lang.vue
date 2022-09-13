<template>
  <div class="block-info__content content-lang">
    <div class="lang">
      <p class="name">{{ name }}</p>
      <div class="level">
        <v-rating
          v-model="rating"
          size="small"
          length="5"
          empty-icon="mdi-circle-outline"
          full-icon="mdi-circle"
          half-icon="mdi-circle-half"
          half-increments
          color="#3a5b87"
          readonly
        ></v-rating>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.content-lang {
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
