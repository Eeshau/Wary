import logo from './logo.svg';
import './styles/App.css'
import Nav from './components/Nav'
import Welcome from './pages/Welcome.js'
import Browse from './pages/Browse.js'
import Communities from './pages/Communities';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Routes>
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Routes>
        <Route path="/communities" element={< Communities/>} />
      </Routes>
    </Router>
 
  </div>
  );
}

export default App;
