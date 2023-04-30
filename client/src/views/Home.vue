<script setup lang="ts">
import NoteCard from '../components/notes/NoteCard.vue';
import { notes } from '../data';
</script>

<template>
  <h4 class="font-bold mt-4">Notes</h4>
  <ul>
    <li v-for="note in notes.slice(0, 3)" :key="note.id">
      <NoteCard :note="note" />
    </li>
    <button
      class="bg-slate-400 p-2 rounded hover:cursor-pointer"
      @click="$router.push('/notes')"
    >
      View more...
    </button>
  </ul>
</template>
