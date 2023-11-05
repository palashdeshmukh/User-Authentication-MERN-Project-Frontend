import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>

    
    </div>
  );
}

export default App;
