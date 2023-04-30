<script setup lang="ts">
import { useRoute } from 'vue-router';
import { notes } from '../data';

const route = useRoute();

route.params.id;

const note = notes.find((x) => x.id === parseInt(route.params.id as string));
</script>

<template>
  <template v-if="note">
    <p>{{ note.title }}</p>
    <p>{{ note.id }}</p>
  </template>
</template>
