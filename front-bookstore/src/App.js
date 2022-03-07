import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Autores from "./views/autores";
import CreateA from "./views/autores/Create";
import Editoras from "./views/editoras";
import CreateE from "./views/editoras/Create";
import Livros from "./views/livros";
import CreateL from "./views/livros/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Autores" element={<Autores/>} />
        <Route path="/Autores-Create" element={<CreateA/>} />
        <Route path="/Autores-Update/:id" element={<CreateA/>} />
        <Route path="/Editoras" element={<Editoras/>} />
        <Route path="/Editoras-Create" element={<CreateE/>} />
        <Route path="/Editoras-Update/:id" element={<CreateE/>} />
        <Route path="/Livros" element={<Livros/>} />
        <Route path="/Livros-Create" element={<CreateL/>} />
        <Route path="/Livros-Update/:id" element={<CreateL/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
