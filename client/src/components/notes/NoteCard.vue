<script setup lang="ts">
import { PropType } from 'vue';
import { Note } from '../../models/Note';
defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true,
  },
  showExtraContent: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="mx-auto py-4 text-left border-2 rounded pl-2 my-4 hover:cursor-pointer truncate"
    @click="$router.push({ name: 'NoteEdit', params: { id: note.id } })"
  >
    <p class="font-bold">{{ note.title }}</p>
    <template v-if="showExtraContent">
      <div class="flex gap-2">
        <p>{{ note.creationDate.toDateString() }}</p>
        <p>{{ note.content }}</p>
      </div>
    </template>
  </div>
</template>
