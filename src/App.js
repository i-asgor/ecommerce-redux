import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './Pages/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} >
        </Route>
        <Route exact path='/products' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
