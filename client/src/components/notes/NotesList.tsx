import { Note } from '../../models/Note';
import NoteCard from './NoteCard';

interface NotesListProps {
  notes: Note[];
  showExtraContent: boolean;
  onClickHandler: (note: Note) => void;
}

export default function NotesList({
  notes,
  showExtraContent,
  onClickHandler,
}: NotesListProps) {
  return (
    <>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteCard
              note={note}
              showExtraContent={showExtraContent}
              onClickHandler={onClickHandler}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
