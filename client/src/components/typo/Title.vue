<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h4 class="font-bold my-4">{{ value }}</h4>
</template>
