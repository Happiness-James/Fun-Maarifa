import '../App.css';
import { Route, Routes } from "react-router-dom";
import React, { } from "react";
import Home from './Home';
import Games from './Games';
import CreateGames from './Create';
import Quiz from './Quiz';
import Navbar from './Navbar';

function App() {
  // Display Navbar and Routes only
  // This should be wrapped under a container
  // Individual components/elements will handle the row to column 
  // relation ship
  // Passing data from one element to another should be done
  // via state property of the <Link to="url", state: {{}}> feature 
  return (
    <div className="App">
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="create" element={<CreateGames />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
