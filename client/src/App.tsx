import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ErrorModal from './Error';

export const server = "http://localhost:3001";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/:identifier' element={< Main />} />
      </Routes>
    </div>
  );
}

const Main = () => {
  const { identifier } = useParams();
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(`${server}/url/${identifier}`);
        const data = await response.json();
        window.location.href = data;
      } catch (err: any) {
        setError(err instanceof Error ? err : new Error(String(err)));
      }
    }
    load();
  }, [])
  return (
    <>
      {error && (
        < ErrorModal error={error} />
      )}
    </>
  )
}

export default App;