import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
