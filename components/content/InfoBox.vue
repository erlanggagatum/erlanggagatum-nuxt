<script setup>
// import icons from HeroIcons
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
// define props in <script>
const props = defineProps(["type"]);
</script>
<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="info-box not-prose" :class="[type]">
    <details>
      <summary class="">
        <InformationCircleIcon class="w-8 h-8"/>
        <slot/>
      </summary>
      <div class="details pt-2">
        <!-- Named markdown component to render rich-text -->
        
        <Markdown :use="$slots.details" unwrap="p"></Markdown>
      </div>
    </details>
  </div>
</template>
<style scoped> 

summary {
  @apply inline-flex items-center gap-x-3
}

details summary::-webkit-details-marker {
  display: none;
}

.info-box {
  @apply p-5 rounded-lg
}

.warning {
  @apply bg-sky-100
}

</style>