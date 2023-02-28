import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/products' element={<ListPage />}/>
          <Route path='/products/:productId' element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    </div> 
    )
}

export default App;
