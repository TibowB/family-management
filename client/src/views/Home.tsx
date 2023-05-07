import { useNavigate } from 'react-router-dom';
import Button from '../components/commons/Button';
import NotesList from '../components/notes/NotesList';
import Title from '../components/typo/Title';
import ViewTitle from '../components/typo/ViewTitle';
import { notes } from '../data';
import { Note } from '../models/Note';

export default function Home() {
  const navigate = useNavigate();

  function editNote(note: Note) {
    console.log(note);
  }

  function handleViewMoreNotes() {
    navigate('/notes');
  }
  return (
    <>
      <ViewTitle value="Home" />
      <Title value="Meals of the day" />
      <Title value="Recent notes" />
      <NotesList
        notes={notes.slice(0, 3)}
        showExtraContent={false}
        onClickHandler={editNote}
      />
      <Button
        classes="bg-slate-400 p-2 rounded"
        content="View more..."
        handleOnClick={() => handleViewMoreNotes()}
      />
    </>
  );
}
