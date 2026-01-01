import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import CustomerPage from './pages/customer/CustomerPage';
import ProductPage from './pages/product/ProductPage';
import UserPage from './pages/user/UserPage';
import CategoryPage from './pages/category/CategoryPage';
import NotFoundPage from './pages/notfound/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>
  );

}

export default App;
