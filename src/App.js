import './App.css';
import Header from './comps/home';
import Construct from "./comps/construct"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path='*' element={<Construct />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
