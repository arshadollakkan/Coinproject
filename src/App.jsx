import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar"
import Bitcoin from "./pages/bitcoin/bitcoin"
import Home from "./pages/home/home"
import { Routes, Route } from "react-router-dom";



function App() {


  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bitcoin/:id' element={<Bitcoin/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
