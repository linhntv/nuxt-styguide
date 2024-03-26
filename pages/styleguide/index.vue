<template>
  <div class="grid grid-cols-1 md:grid-cols-6">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bg-slate-200 mt-1 mb-1 ml-1 mr-1"
    >
      <NuxtLink :to="item.path" class="p-3 w-full block">
        {{ item.meta?.titlePage }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Home - Style Guide",
});
definePageMeta({
  layout: "styleguide",
  titlePage: "Index",
});
const router = useRouter();

const items = computed(() => {
  return router.options?.routes?.filter((item) =>
    item.path?.startsWith("/styleguide/")
  );
});
</script>
