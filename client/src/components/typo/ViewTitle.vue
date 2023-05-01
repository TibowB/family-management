<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-between mt-4 items-center">
    <h2 class="font-bold text-2xl">{{ value }}</h2>
    <slot></slot>
  </div>
</template>
