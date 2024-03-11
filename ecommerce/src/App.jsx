import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        
        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;