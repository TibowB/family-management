<script setup lang="ts">
import { notes } from '../data';
import { Note } from '../models/Note';

const toto = (note: Note) => {
  alert(note.content);
};
</script>

<template>
  <section class="flex-grow w-4/5 mx-auto">
    <h4 class="font-bold mt-4">Notes</h4>
    <ul>
      <li v-for="note in notes">
        <div
          class="mx-auto py-4 text-left border-2 rounded pl-2 my-4 hover:cursor-pointer"
          @click="toto(note)"
        >
          <p>{{ note.content }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
