import { Link } from './models/Link';
import { Note } from './models/Note';
import { WeekDayMeal } from './models/WeekDayMeal';

export const notes: Note[] = [
  {
    id: 1,
    title: 'My Cool Note',
    content: 'Hello World',
    creationDate: new Date(2023, 3, 23),
    editionDate: new Date(2023, 3, 23),
  },
  {
    id: 2,
    title: 'My Cool Note',
    content: 'Hello World From Me',
    creationDate: new Date(2023, 3, 24),
    editionDate: new Date(2023, 3, 24),
  },
  {
    id: 3,
    title: 'My Cool Note',
    content: 'Hello World From Me',
    creationDate: new Date(2023, 3, 25),
    editionDate: new Date(2023, 3, 25),
  },
  {
    id: 4,
    title: 'My Cool Note',
    content: 'Hello World From Me',
    creationDate: new Date(2023, 3, 26),
    editionDate: new Date(2023, 3, 26),
  },
];

export const links: Link[] = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Notes',
    route: '/notes',
  },
  {
    name: 'Meals',
    route: '/meals',
  },
  {
    name: 'Todos',
    route: '/todos',
  },
];

export const weekDayMeals: WeekDayMeal[] = [
  {
    day: {
      name: 'Monday',
      position: 1,
    },
    lunch: '',
    dinner: '',
  },
  {
    day: {
      name: 'Tuesday',
      position: 2,
    },
    lunch: '',
    dinner: '',
  },
  {
    day: {
      name: 'Wednesday',
      position: 3,
    },
    lunch: '',
    dinner: '',
  },
  {
    day: {
      name: 'Thursday',
      position: 4,
    },
    lunch: '',
    dinner: '',
  },
  {
    day: {
      name: 'Friday',
      position: 5,
    },
    lunch: '',
    dinner: '',
  },
  {
    day: {
      name: 'Saturday',
      position: 6,
    },
    lunch: '',
    dinner: '',
  },
  {
    day: {
      name: 'Sunday',
      position: 0,
    },
    lunch: '',
    dinner: '',
  },
];
