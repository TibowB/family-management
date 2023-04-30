<script setup lang="ts">
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import { notes } from '../data';
import { onMounted, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const titleRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const hasBeenEdited = ref<boolean>(false);
const note = notes.find((x) => x.id === parseInt(route.params.id as string));

if (!note) {
  router.push({ name: 'Notes' });
}

const handleContentFocus = () => contentRef.value?.focus();

const handleOnChange = () => {
  hasBeenEdited.value = true;
};

onMounted(() => {
  if (note && !note.title) {
    titleRef.value?.focus();
  }
});

onBeforeRouteLeave((to, from, next) => {
  if (!note) {
    next();
    return;
  }

  const noteHasNoteBeenEdited =
    to.name === 'Notes' &&
    !note.title &&
    !note.content &&
    from.name === 'NoteEdit';

  if (noteHasNoteBeenEdited) {
    const index = notes.findIndex((x) => x.id === note.id);
    notes.splice(index, 1);
    next();
    return;
  }

  if (hasBeenEdited) {
    note.editionDate = new Date();
    next();
    return;
  }

  next();
});
</script>

<template>
  <div class="font-bold my-4">
    <RouterLink to="/notes">&lt; Notes</RouterLink>
  </div>

  <template v-if="note" class="flex flex-col">
    <input
      type="text"
      v-model="note.title"
      class="w-full font-bold mb-4 focus:outline-0"
      ref="titleRef"
      @keyup.enter="handleContentFocus"
      @change="handleOnChange"
    />
    <textarea
      type="text"
      v-model="note.content"
      class="w-full focus:outline-0"
      @change="handleOnChange"
      ref="contentRef"
    ></textarea>
  </template>
</template>
