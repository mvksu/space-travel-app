import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './components/Destinations';
import Crew from './components/Crew';
import Tech from './components/Tech';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/destinations/moon" element={<Destinations planet="Moon"/>}>
        </Route>
        <Route path="/destinations/mars" element={<Destinations planet="Mars"/>}>
        </Route>
        <Route path="/destinations/europa" element={<Destinations planet="Europa"/>}>
        </Route>
        <Route path="/destinations/titan" element={<Destinations planet="Titan"/>}>
        </Route>
        <Route path="/crew/douglas" element={<Crew member="Douglas Hurley"/>}>
        </Route>
        <Route path="/crew/mark" element={<Crew  member="Mark Shuttleworth"/>}>
        </Route>
        <Route path="/crew/glover" element={<Crew  member="Victor Glover"/>}>
        </Route>
        <Route path="/crew/anousheh" element={<Crew  member="Anousheh Ansari"/>}>
        </Route>
        <Route path="/tech" element={<Tech />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
