import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Beer Globus</h1>
      <Navigation/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products' element={<ListPage />} />
          <Route path='/products/:productId' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
