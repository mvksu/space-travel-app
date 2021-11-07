import Navbar from './components/Navbar'
import Home from './components/Home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/destinations" element={<Destinations/>}>
        </Route>
        <Route path="/destinations/:name" element={<Destinations/>}>
        </Route>
        <Route path="/crew" element={<Crew/>}>
        </Route>
        <Route path="/crew/:name" element={<Crew />}>
        </Route>
        <Route path="/tech" element={<Tech />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
