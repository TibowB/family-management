<script setup lang="ts">
import ViewTitle from '../components/typo/ViewTitle.vue';
import { weekDayMeals } from '../data';
</script>
<template>
  <ViewTitle value="Meals" />
  <ul>
    <li v-for="dayMeal of weekDayMeals" :key="dayMeal.day.position">
      <h4 class="font-bold mt-4">{{ dayMeal.day.name }}</h4>
      <input type="text" v-model="dayMeal.lunch" />
      <input type="text" v-model="dayMeal.dinner" />
    </li>
  </ul>
  <div class="flex justify-between">
    <button class="bg-emerald-400 text-white p-2 rounded hover:cursor-pointer">
      Save
    </button>
    <button class="bg-emerald-400 text-white p-2 rounded hover:cursor-pointer">
      Add Meal
    </button>
    <button class="bg-rose-600 text-white p-2 rounded hover:cursor-pointer">
      Cancel
    </button>
  </div>
</template>
