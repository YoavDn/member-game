import './assets/style/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  )
}

export default App;
