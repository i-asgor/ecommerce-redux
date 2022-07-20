import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />        
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
