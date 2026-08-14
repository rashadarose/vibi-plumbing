import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Plumbing from './pages/Plumbing'
import Remodeling from './pages/Remodeling'
import Handyman from './pages/Handyman'
import ServiceQuestionnaire from './pages/ServiceQuestionnaire'
import AdminDashboard from './pages/AdminDashboard'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/remodeling" element={<Remodeling />} />
        <Route path="/handyman" element={<Handyman />} />
        <Route path="/get-service" element={<ServiceQuestionnaire />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
