<template>
  <div class="block-info__content content-skill">
    <div class="skill">
      <p class="name">{{ name }}</p>
      <div class="level">
        <v-rating
          v-model="rating"
          size="small"
          length="10"
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

<style>
.content-skill .v-btn--icon.v-btn--size-small {
  width: calc(var(--v-btn-height) - 0px) !important;
}
</style>
