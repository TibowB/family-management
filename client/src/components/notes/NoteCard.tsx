import { Note } from '../../models/Note';

interface NoteCardProps {
  note: Note;
  showExtraContent?: boolean;
  onClickHandler: (note: Note) => void;
}

export default function NoteCard({
  note,
  showExtraContent,
  onClickHandler,
}: NoteCardProps) {
  return (
    <div
      className="mx-auto py-2 text-left border-2 rounded pl-2 my-4 hover:cursor-pointer truncate"
      onClick={() => onClickHandler(note)}
    >
      <p className="font-bold">{note.title}</p>
      {showExtraContent && (
        <div className="flex gap-2 truncate">
          <p>{note.editionDate.toDateString()}</p>
          <p>{note.content}</p>
        </div>
      )}
    </div>
  );
}
