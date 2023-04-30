<script setup lang="ts">
const isMobile: boolean = screen.width <= 760;
</script>

<template>
  <template v-if="isMobile">
    <section class="w-full bg-slate-400 text-center flex justify-center py-4">
      <a href="/" class="font-bold text-xl my-auto">Family Management</a>
    </section>
  </template>
  <template v-else>
    <section class="w-full bg-slate-400 text-center flex justify-center py-4">
      <p class="font-bold text-xl my-auto">Family Management</p>
    </section>
  </template>
</template>
