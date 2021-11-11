import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Layout from "./components/layout"
import CompareplayerLayout from "./components/compareplayer/CompareplayerLayout"
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/compareplayer' element={<CompareplayerLayout/>} />
      </Routes>
    </Router>
  );
}

export default App;
