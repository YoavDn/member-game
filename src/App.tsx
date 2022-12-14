import React from 'react';
import './assets/style/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router';
import Home from './pages/Home'
import Game from './pages/Game'


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App;
