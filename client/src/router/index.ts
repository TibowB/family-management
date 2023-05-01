import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Notes from '../views/Notes.vue';
import NoteEdit from '../views/NoteEdit.vue';
import Meals from '../views/Meals.vue';
import Todos from '../views/Todos.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
  },
  {
    path: '/notes/:id',
    name: 'NoteEdit',
    component: NoteEdit,
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
