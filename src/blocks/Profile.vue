<template>
  <div class="block-info">
    <div class="block-info__title">Profil</div>
    <div class="block-info__separator"></div>
    <div class="block-info__content">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
