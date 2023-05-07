import { useNavigate } from 'react-router-dom';
import ViewTitle from '../../components/typo/ViewTitle';
import Button from '../../components/commons/Button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <ViewTitle value="Page not found" />
      <Button
        classes="bg-slate-400 p-2 rounded mt-4"
        content="Back to home page"
        handleOnClick={() => navigate('/')}
      />
    </>
  );
}
