import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import BuyCredit from './pages/BuyCredit.jsx';
import Result from './pages/Result.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
// clerk components

function App() {


  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
