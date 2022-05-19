import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Test</h1>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      <Link to="/header">Header</Link> |{" "}
      <Link to="/body">Body</Link> |{" "}
      <Link to="/footer">Footer</Link> |{" "}
      </nav>
      
    </div> 
  );
}



