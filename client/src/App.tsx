import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

export const server = "http://localhost:3001";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={< Main />} />
      </Routes>
    </div>
  );
}

const Main = () => {
  return (
    <>
    </>
  )
}

export default App;