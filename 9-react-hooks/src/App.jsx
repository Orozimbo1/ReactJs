import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Home, About } from './pages'

// components
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
