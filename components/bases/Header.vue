<template>
  <div class="base-header">
    <div class="header-logo">
      <img class="header-img" src="/images/Logo.svg" alt="logo" />
    </div>
    <div class="header-acction">
      <div v-for="name in listNameBtn" class="action-btn">
        <div class="action-btn-label">
          {{ name }}
        </div>
        <BaseIcon :width="10" :height="10" name="arrow-down"></BaseIcon>
      </div>
      <div v-for="iconName in listIconBtn" class="action-btn">
        <BaseIcon :width="20" :height="20" :name="iconName"></BaseIcon>
      </div>
      <div class="action-btn">
        <BaseIcon :width="40" name="account-outline"></BaseIcon>
      </div>
      <div class="action-btn">
        <div class="action-btn-label">linh nguyen</div>
        <BaseIcon :width="10" :height="10" name="arrow-down"></BaseIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const listNameBtn: ref<string[]> = ref([
  "Home",
  "Pages",
  "Courses",
  "Features",
  "Blog",
  "Shop",
]);

const listIconBtn: ref<string[]> = ref(["search-outline", "rainny-cloudy"]);
</script>

<style lang="scss" scoped src="/assets/scss/bases/header.scss"></style>
