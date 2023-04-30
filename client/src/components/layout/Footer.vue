<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { links } from '../../data';
const isMobile: boolean = screen.width <= 760;
</script>

<template>
  <template v-if="isMobile">
    <section
      class="w-full bg-slate-400 text-center flex justify-evenly pt-4 pb-10 lg:pb-4"
    >
      <p v-for="link of links" class="font-bold text-xl my-auto">
        <RouterLink :to="link.route">{{ link.name }}</RouterLink>
      </p>
    </section>
  </template>
  <template v-else> </template>
</template>

<style>
.router-link-exact-active {
  @apply text-white bg-slate-800 p-2 rounded;
}
</style>
