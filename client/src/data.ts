import { Note } from './models/Note';

export const notes: Note[] = [
  {
    content: 'Hello World',
    creationDate: new Date(2023, 4, 23),
  },
  {
    content: 'Hello World From Me',
    creationDate: new Date(2023, 4, 24),
  },
  {
    content: 'Hello World From Me',
    creationDate: new Date(2023, 4, 25),
  },
];

export const links: string[] = ['Notes', 'Meals', 'Goals'];
