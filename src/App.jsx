import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'



function App() {
 

  return (
    <>
    <Header/>
     {/* landing home path */}
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App
