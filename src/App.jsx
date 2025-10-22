import './App.css';

import Structure from './Components/Structure';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Structure />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
