import logo from './logo.svg';
import './App.css';
import LandingPg from './components/LandingPage/LandingPg';
import Profilepg from './components/ProfilePage/Profilepg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPg />} />
          <Route path="/login/:id" element={<Profilepg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
