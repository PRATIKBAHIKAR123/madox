
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RealEstateLandingPage from './pages/homepage'
import AboutUsPage from './pages/aboutus/page';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<RealEstateLandingPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
    </Routes>
  </Router>
  )
}

export default App
