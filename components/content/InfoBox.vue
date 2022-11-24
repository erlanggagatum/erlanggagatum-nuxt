<script setup>
// import icons from HeroIcons
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
// define props in <script>
const props = defineProps(["type"]);
</script>
<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="info-box bg-yellow-100 not-prose" :class="[type]">
    <!-- Conditionally render icons based on prop -->
    <InformationCircleIcon v-if="type == 'warning'" class="w-10 h-10" />
    <InformationCircleIcon v-else-if="type == 'error'" class="w-10 h-10" />
    <InformationCircleIcon v-else class="w-10 h-10" />
    <details>
      <summary>
        <!-- Unamed Slot to render component content -->
        <slot />
      </summary>
      <div class="details pt-2">
        <!-- Named markdown component to render rich-text -->
        <Markdown :use="$slots.details" unwrap="p"></Markdown>
      </div>
    </details>
  </div>
</template>
<style scoped> /* ... */ </style>