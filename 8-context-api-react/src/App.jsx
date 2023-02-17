import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// Components
import { Navbar } from './components'

// Pages
import { Home, About, Products } from './pages'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
