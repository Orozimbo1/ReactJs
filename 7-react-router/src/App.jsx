import './App.css'

// 1 - config react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home, About } from './pages'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
