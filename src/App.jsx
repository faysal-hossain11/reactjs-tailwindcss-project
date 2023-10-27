
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Overview from './Pages/Overview'
import About from './Pages/About'
import Feature from './Pages/Feature'
import Pricing from './Pages/Pricing'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
