<template>
  <div class="base-button" :style="{ 'min-width': minWidth, height: height }">
    <div v-if="iconName" class="btn-icon">
      <img :src="`/images/${iconName}.svg`" />
    </div>
    <div v-if="labelBtn" class="btn-label">{{ labelBtn }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  iconName: {
    type: String,
    default: "account",
  },
  labelBtn: {
    type: String,
    default: "ラベル",
  },
  minWidth: {
    type: String,
    default: "224px",
  },
  height: {
    type: String,
    default: "44px",
  },
});
</script>

<style lang="scss" scoped src="/assets/scss/bases/base-button.scss"></style>
