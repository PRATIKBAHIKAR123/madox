
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RealEstateLandingPage from './pages/homepage'
import AboutUsPage from './pages/aboutus/page';
import PropertyListingPage from './pages/PropertyListingPage/PropertyListingPage';
import PropertyDetails from './pages/PropertyListingPage/property-details/page';
import LandDetails from './pages/lands/land-details/page';
import Lands from './pages/lands/page';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RealEstateLandingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/property-list" element={<PropertyListingPage />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/land-list" element={<Lands />} />
        <Route path="/land-details" element={<LandDetails />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
