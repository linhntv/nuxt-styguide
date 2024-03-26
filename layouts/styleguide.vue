<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const items = computed(() => {
  const allPageStyleguide =
    router.options?.routes?.filter((item) =>
      item.path?.startsWith("/styleguide/")
    ) || [];
  allPageStyleguide.unshift({
    meta: { titlePage: "Home" },
    path: "/styleguide",
  });
  return allPageStyleguide;
});
</script>

<template>
  <div class="w-full bg-white min-h-screen">
    <div class="layout-main flex">
      <pr-menu
        :model="items"
        class="w-[200px] min-h-screen rounded-none bg-slate-200"
      >
        <template #item="{ item }">
          <NuxtLink :to="item.path" class="p-3 w-full block">
            {{ item.meta?.titlePage }}
          </NuxtLink>
        </template>
      </pr-menu>
      <div class="w-full px-5 py-5" style="width: calc(100% - 200px)">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  background-color: #3f3f46;
  color: #fff;
}
</style>
