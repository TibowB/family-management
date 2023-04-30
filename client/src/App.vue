<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <main class="h-screen flex flex-col">
    <NavBar />
    <section class="flex-grow w-4/5 mx-auto">
      <RouterView />
    </section>
    <Footer />
  </main>
</template>
