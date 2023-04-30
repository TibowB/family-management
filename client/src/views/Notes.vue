<script setup lang="ts">
import NoteCard from '../components/notes/NoteCard.vue';
import { notes } from '../data';
</script>
<template>
  <h4 class="font-bold mt-4">Notes</h4>
  <ul>
    <li v-for="note in notes" :key="note.id">
      <NoteCard :note="note" :showExtraContent="true" />
    </li>
  </ul>
</template>
