import { useEffect } from 'react';
import './App.css';
import {
  Routes,
  Route,
  useParams,
} from "react-router-dom";

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
  useEffect(() => {
    async () => {
      const response = await fetch(`${server}/url/${identifier}`);
      const data = await response.json();
      window.location.href = data;
    }
  })
  return (
    <>
    </>
  )
}

export default App;