import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout.jsx";
import { LogIn } from "./Components/LogIn.jsx";
import { HomePage } from "./Components/HomePage.jsx";
import { AddPerson } from "./Components/AddPerson.jsx";
import { Contact } from "./Components/Contact.jsx";
import { About } from "./Components/About.jsx";
import { Signup } from "./Components/Signup.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/addperson" element={<AddPerson />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
