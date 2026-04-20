import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChaseCollection from './components/ChaseCollection'
import ProductCategories from './components/ProductCategories'
import GradingFeaturette from './components/GradingFeaturette'
import LocationContact from './components/LocationContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <ChaseCollection />
        <ProductCategories />
        <GradingFeaturette />
        <LocationContact />
      </main>
      <Footer />
    </div>
  )
}
