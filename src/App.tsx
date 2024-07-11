import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';



// Components
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
