import { useEffect, useRef, useState } from 'react';
import ViewTitle from '../components/typo/ViewTitle';
import { notes as data } from '../data';
import { Note } from '../models/Note';
import NotesList from '../components/notes/NotesList';
import Button from '../components/commons/Button';

export default function Notes() {
  const [isEditingNote, setIsEditingNote] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>(data);
  const [editedNote, setEditedNote] = useState<Note | null>(null);
  const [noteHasBeenEdited, setNoteHasBeenEdited] = useState<boolean>(false);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditingNote && titleRef.current !== null) {
      titleRef.current.focus();
    }
  }, [isEditingNote]);

  function handleAddNote() {
    setEditedNote({
      id: 0,
      title: '',
      content: '',
      creationDate: new Date(),
      editionDate: new Date(),
    });
    setIsEditingNote(true);
    if (titleRef.current !== null) {
      titleRef.current.focus();
    }
  }

  function handleStartEditingNote(note: Note) {
    setEditedNote(note);
    setIsEditingNote(true);
  }

  function handleCloseEditing() {
    if (editedNote?.id === 0 && editedNote.title !== '') {
      editedNote.id = notes.length + 1;
      setNotes([...notes, editedNote]);
    } else {
      const nextNotes = notes.map((x) => {
        if (x.id === editedNote?.id) {
          return editedNote;
        }
        return x;
      });

      setNotes(nextNotes);
    }

    setEditedNote(null);
    setIsEditingNote(false);
  }

  function handleOnKeyUp(key: string) {
    if (key === 'Enter' && contentRef.current !== null) {
      contentRef.current.focus();
    }
  }

  function handleTitleChange(value: string) {
    if (!editedNote) {
      return;
    }
    setEditedNote({
      id: editedNote.id,
      title: value,
      content: editedNote.content,
      creationDate: editedNote.creationDate,
      editionDate: editedNote.editionDate,
    });
  }

  function handleContentChange(value: string) {
    if (!editedNote) {
      return;
    }

    setEditedNote({
      id: editedNote.id,
      title: editedNote.title,
      content: value,
      creationDate: editedNote.creationDate,
      editionDate: editedNote.editionDate,
    });

    if (!noteHasBeenEdited) {
      setNoteHasBeenEdited(true);
    }
  }

  return (
    <>
      {!isEditingNote ? (
        <div className="h-full relative">
          <ViewTitle value="Notes">
            <p>{notes.length} notes</p>
          </ViewTitle>
          <NotesList
            notes={notes.sort(
              (a, b) => b.editionDate.getTime() - a.editionDate.getTime()
            )}
            showExtraContent={true}
            onClickHandler={handleStartEditingNote}
          />
          <Button
            classes="bg-slate-200 p-2 absolute mb-4 bottom-4 right-0 rounded"
            content="Add"
            handleOnClick={() => handleAddNote()}
          />
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="font-bold my-4" onClick={() => handleCloseEditing()}>
            <p>&lt; Notes</p>
          </div>
          <input
            type="text"
            value={editedNote?.title}
            className="w-full font-bold mb-4 focus:outline-0 text-xl"
            onChange={(e) => handleTitleChange(e.target.value)}
            onKeyUp={(e) => handleOnKeyUp(e.key)}
            ref={titleRef}
          />
          <textarea
            value={editedNote?.content}
            className="w-full flex-grow focus:outline-0 overflow-auto"
            onChange={(e) => handleContentChange(e.target.value)}
            ref={contentRef}
          ></textarea>
        </div>
      )}
    </>
  );
}
