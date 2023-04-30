<script setup lang="ts">
import { links } from './data';
</script>

<template>
  <main class="h-screen flex flex-col">
    <section class="w-full bg-slate-400 text-center flex justify-center py-4">
      <p class="font-bold text-xl my-auto">Family Management</p>
    </section>
    <RouterView />
    <section
      class="w-full bg-slate-400 text-center flex justify-evenly pt-4 pb-10 lg:pb-4"
    >
      <p v-for="link of links" class="font-bold text-xl my-auto">{{ link }}</p>
    </section>
  </main>
</template>
