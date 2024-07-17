import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Organismos/Login";
import { LoginForm } from "./Organismos/Loginform";
import { Home } from "./Organismos/Home";
import { Camera } from "./Organismos/Camera";
import { Monitoring } from "./Organismos/Monitoring";
import { AnimalData } from "./Organismos/AnimalData";
import { Customizeanimal } from "./Organismos/Customizeanimal";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Formulario" element={<LoginForm/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Camara" element={<Camera/>} />
        <Route path="/Monitoreo" element={<Monitoring/>} />
        <Route path="/DatosAnimalito" element={<AnimalData/>}/>
        <Route path="/Personaliza" element={<Customizeanimal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
