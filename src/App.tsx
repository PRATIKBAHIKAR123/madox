
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RealEstateLandingPage from './pages/homepage'
import AboutUsPage from './pages/aboutus/page';
import PropertyListingPage from './pages/PropertyListingPage/PropertyListingPage';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<RealEstateLandingPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/property-list" element={<PropertyListingPage />} />
    </Routes>
  </Router>
  )
}

export default App
