import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Airbnb from "./pages/Airbnb";
import Meme from "./pages/Meme";

import './App.css'

import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="airbnb" element={<Airbnb />} />
          <Route path="meme" element={<Meme />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
