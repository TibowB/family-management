<script setup lang="ts">
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <main class="h-screen flex flex-col pt-4 overflow-auto">
    <section class="flex-grow w-4/5 mx-auto">
      <RouterView />
    </section>
    <Footer />
  </main>
</template>
