import React from "react";
import "./App.css";
import CreateForm from "./components/CreateForm/CreateForm";
import Navbar from "./components/Header/Navbar";
function App() {
  return (
    <>
    <Navbar/>
      <CreateForm />
    </>
  );
}

export default App;
