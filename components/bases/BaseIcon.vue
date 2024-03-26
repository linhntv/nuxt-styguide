<template>
  <div class="base-icon">
    <img
      v-if="name"
      :src="`${path}/${name}.svg`"
      :width="width"
      :height="height"
      :alt="name"
      :style="`cursor: ${cursorType}`"
      :class="[hoverFilter, tranform, filter, className]"
      rel="preload"
      @click="$emit('onclick', $event)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: 30,
  },
  height: {
    type: [Number, String],
    default: 30,
  },
  rotate: {
    type: [Number, String],
    default: null,
  },
  filterColor: {
    type: String,
    default: null,
  },
  hoverFilterColor: {
    type: String,
    default: null,
  },
  cursorType: {
    type: String,
    default: "default",
  },
  className: {
    type: String,
    default: "",
  },
  path: {
    type: String,
    default: "/images/base-icon",
  },
});

const emits = defineEmits(["onclick"]);

const filter = computed(() => {
  return props.filterColor && `filter_${props.filterColor}`;
});

const tranform = computed(() => {
  return props.rotate && `rotate_${props.rotate}`;
});

const hoverFilter = computed(() => {
  return props.hoverFilterColor && `hover-filter_${props.hoverFilterColor}`;
});
</script>

<style lang="scss" scoped src="/assets/scss/bases/base-icon.scss"></style>
