import './App.css'

// 1 - config react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home, About, Product, Info } from './pages'

// components
import { Navbar } from './components'

function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Link com react router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
