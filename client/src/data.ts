import { Link } from './models/Link';
import { Note } from './models/Note';

export const notes: Note[] = [
  {
    id: 1,
    title: 'My Cool Note',
    content: 'Hello World',
    creationDate: new Date(2023, 3, 23),
  },
  {
    id: 2,
    title: 'My Cool Note',
    content: 'Hello World From Me',
    creationDate: new Date(2023, 3, 24),
  },
  {
    id: 3,
    title: 'My Cool Note',
    content: 'Hello World From Me',
    creationDate: new Date(2023, 3, 25),
  },
  {
    id: 4,
    title: 'My Cool Note',
    content: 'Hello World From Me',
    creationDate: new Date(2023, 3, 26),
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
    name: 'Goals',
    route: '/goals',
  },
];
