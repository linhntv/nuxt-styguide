<template>
  <div class="layout-defaut">
    <div class="header-default">
      <Header></Header>
    </div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout-defaut {
  .header-default {
    box-shadow: rgba(0, 0, 0, 0.45) 1px 8px 20px -13px;
    padding: 8px 140px;
  }
}
</style>
