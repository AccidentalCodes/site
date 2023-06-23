import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Card_1 from './Pages/Cards/Card_1';
import Landing from './Components/Landing';

const App = () => {
  return (
    <div className="bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="card_1" element={<Card_1 />} />
          <Route path="landing" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
