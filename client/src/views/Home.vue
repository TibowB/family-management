<script setup lang="ts">
import NoteCard from '../components/notes/NoteCard.vue';
import Title from '../components/typo/Title.vue';
import ViewTitle from '../components/typo/ViewTitle.vue';
import { notes } from '../data';
</script>

<template>
  <ViewTitle value="Home" />
  <Title value="Meals of the day" />
  <Title value="Recent notes" />
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
