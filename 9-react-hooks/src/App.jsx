import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Home, About } from './pages'

// components
import { Navbar } from './components'

// context
import { HookUseContext } from './components/HookUseContext'

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  )
}

export default App
