import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './Pages/Products';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
