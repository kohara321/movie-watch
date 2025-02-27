import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/sections/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div> 
  )
}

export default App
