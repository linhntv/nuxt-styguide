<!-- eslint-disable vue/no-useless-template-attributes -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <section class="bg-[#fff] p-8">
    <div class="text-center">
      <h2 class="mb-2">ICON LIST</h2>
      <div class="list-icon">
        <div
          v-for="icon in [...icons].sort()"
          :key="`icon-${icon}`"
          class="flex gap-2 flex-col items-center border p-2 rounded"
        >
          <BaseIcon width="30" height="30" :name="icon" />
          <span class="ml-2">{{ icon }}</span>
        </div>
      </div>
    </div>

    <br />
    <br />
    <hr />
    <h2 class="mb-2 text-center p-3">SIZING</h2>
    <div class="flex justify-start items-end gap-4">
      <div v-for="size in sizes" :key="size">
        <div>
          <BaseIcon :width="size" :height="size" name="account-fill" />
          <span class="ml-2 mr-5">size: {{ size }}</span>
        </div>
      </div>
    </div>
    <br />
    <br />
    <hr />
    <h2 class="mb-2 text-center">FILTER COLOR</h2>
    <div class="list-icon bg-slate-300">
      <div
        v-for="filterColor in filterColors"
        :key="filterColor"
        class="flex gap-2 flex-col items-center border p-2 rounded"
      >
        <BaseIcon name="calendar-outline" :filter-color="filterColor" />
        <span class="ml-2">{{ filterColor }}</span>
      </div>
    </div>

    <br />
    <br />
    <hr />
    <h2 class="mb-2">HOVER FILTER COLOR</h2>
    <div class="list-icon bg-slate-300">
      <div
        v-for="filterColor in filterColors"
        :key="filterColor"
        class="flex gap-2 flex-col items-center border p-2 rounded"
      >
        <BaseIcon name="home-outline" :hover-filter-color="filterColor" />
        <span class="ml-2 mr-5">{{ filterColor }}</span>
      </div>
    </div>
    <br />
    <br />
    <hr />
    <h2 class="mb-2">TRANFORM ROTATE</h2>
    <div v-for="rotate in rotates" :key="rotate">
      <BaseIcon name="notifications-fill" :rotate="rotate" />
      <span class="ml-2">{{ rotate }}</span>
    </div>

    <br />
    <br />
    <hr />
    <div class="text-center">
      <h2>CURSOR TYPE</h2>
      <div class="list-icon">
        <div
          v-for="cursor in cursors"
          :key="cursor"
          class="flex gap-2 flex-col items-center justify-center border p-2 rounded"
        >
          <BaseIcon name="notifications-fill" :cursor-type="cursor" />
          <span class="ml-2">cursor: {{ cursor }}</span>
        </div>
      </div>
    </div>

    <br />
    <br />
  </section>
</template>

<script setup>
useHead({
  title: "Icon",
});
definePageMeta({
  layout: "style-guide",
  titlePage: "Icon",
});

const icons = reactive([
  "accordion-close",
  "accordion-open",
  "account-fill",
  "account-outline",
  "add-fav-outline",
  "add-item-outline",
  "add-pic",
  "alert-dialog",
  "alert",
  "arrow-down",
  "arrow-down-outline",
  "arrow-left",
  "arrow-left-outline",
  "arrow-right",
  "arrow-right-outline",
  "calendar",
  "calendar-outline",
  "cam",
  "cam-outline",
  "check",
  "clock",
  "close",
  "cloudy",
  "cloudy-sunny",
  "contact-outline",
  "delete-outline",
  "diagnosis-outline",
  "done",
  "dot-big",
  "dot-small",
  "download-outline",
  "duplicate-outline",
  "edit-outline",
  "electricity",
  "frame-end",
  "frame-next",
  "frame-prev",
  "frame-start",
  "gateways-outline",
  "guage",
  "h2-outline",
  "home-fill",
  "home-outline",
  "info-dialog",
  "info",
  "jump-arrow-left",
  "jump-arrow-right",
  "jump-column",
  "line",
  "list-outline",
  "logout-outline",
  "maintenance",
  "notifications-fill",
  "notifications-outline",
  "ok",
  "option",
  "option-outline",
  "password-hidden-outline",
  "password-outline",
  "password-shown-outline",
  "pause",
  "plant-outline",
  "plants",
  "play",
  "rainny-cloudy",
  "remove-fav-outline",
  "report-fill",
  "report-outline",
  "save-outline",
  "schedule-outline",
  "search-outline",
  "select-btn",
  "send-outline",
  "settings-fill",
  "settings-outline",
  "stop",
  "sunny",
  "trash-outline",
  "triangle",
  "user-auth-outline",
  "user-outline",
  "view-details-outline",
  "weather",
  "copy",
]);
const sizes = reactive([10, 20, 30, 40, 50, 60, 70, 80, 90]);
const filterColors = reactive([
  "black_color",
  "white_color",
  "picton_blue_color",
  "night_shadz_color",
  "pickled_bluewood_color",
  "lynch_color",
]);
const cursors = reactive([
  "auto",
  "inherit",
  "crosshair",
  "default",
  "help",
  "move",
  "pointer",
  "progress",
  "text",
  "wait",
  "e-resize",
  "ne-resize",
  "nw-resize",
  "n-resize",
  "se-resize",
  "sw-resize",
  "s-resize",
  "w-resize",
  "none",
  "context-menu",
  "cell",
  "vertical-text",
  "alias",
  "copy",
  "no-drop",
  "not-allowed",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
  "col-resize",
  "row-resize",
  "all-scroll",
  "grab",
  "grabbing",
  "zoom-in",
  "zoom-out",
]);
const rotates = reactive([30, 60, 90, 120, 180, 270, 360]);
</script>

<style lang="scss" scoped>
.list-icon {
  margin: unset 10px;
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
</style>
