import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CreateForm from "./components/CreateForm/CreateForm";
function App() {
  return (
    <>
      <Navbar />
      <CreateForm />
      <Footer />
    </>
  );
}

export default App;
