import './App.css'

// 1 - config react router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages
import { Home, About, Product, Info, Page404, Search } from './pages'

// components
import { Navbar, SearchForm } from './components'

function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Link com react router */}
        <Navbar />
        {/* 9 - Search Paramns */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - Search  */}
          <Route path='/search' element={<Search />} />
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to='/about' />} />
          {/* 6 - No match route */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
