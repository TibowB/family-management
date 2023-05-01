<script setup lang="ts">
import { useRouter } from 'vue-router';
import NoteCard from '../components/notes/NoteCard.vue';
import { notes } from '../data';
import { Note } from '../models/Note';
import ViewTitle from '../components/typo/ViewTitle.vue';

const router = useRouter();

const sortedNotes = notes.sort(
  (a, b) => b.editionDate.getTime() - a.editionDate.getTime()
);

const handleAddNote = () => {
  const newNote: Note = {
    id: notes.length + 1,
    title: '',
    content: '',
    creationDate: new Date(),
    editionDate: new Date(),
  };
  notes.push(newNote);
  router.push({ name: 'NoteEdit', params: { id: newNote.id } });
};
</script>
<template>
  <div class="h-full relative">
    <ViewTitle value="Notes">
      <p>{{ notes.length }} notes</p>
    </ViewTitle>
    <ul>
      <li v-for="note in sortedNotes" :key="note.id">
        <NoteCard :note="note" :showExtraContent="true" />
      </li>
    </ul>
    <button
      @click="handleAddNote"
      class="bg-slate-200 p-2 absolute mb-4 bottom-4 right-0 rounded"
    >
      Add
    </button>
  </div>
</template>
