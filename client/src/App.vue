<script setup lang="ts">
import { notes, links } from './data';
import { Note } from './models/Note';

const toto = (note: Note) => {
  alert(note.content);
};
</script>

<template>
  <main class="h-screen flex flex-col">
    <section class="w-full bg-slate-400 text-center flex justify-center py-4">
      <p class="font-bold text-xl my-auto">Family Management</p>
    </section>

    <section class="flex-grow w-4/5 mx-auto">
      <h4 class="font-bold mt-4">Notes</h4>
      <ul>
        <li v-for="note in notes">
          <div
            class="mx-auto py-4 text-left border-2 rounded pl-2 my-4"
            @click="toto(note)"
          >
            <p>{{ note.content }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section
      class="w-full bg-slate-400 text-center flex justify-evenly pt-4 pb-10 lg:pb-4"
    >
      <p v-for="link of links" class="font-bold text-xl my-auto">{{ link }}</p>
    </section>
  </main>
</template>
