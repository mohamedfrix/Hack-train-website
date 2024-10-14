// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Views/Home';
import Registration from './Views/Registration';
import LeaderBoard from './Views/LeaderBoard';



function App() {
  return (
    < div className=' bg-dark w-screen min-h-screen'>
    <Router >
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<LeaderBoard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
