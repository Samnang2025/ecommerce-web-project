import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import CustomerPage from './pages/customer/CustomerPage';
import ProductPage from './pages/product/ProductPage';
import UserPage from './pages/user/UserPage';
import CategoryPage from './pages/category/CategoryPage';
import NotFoundPage from './pages/404/NotFoundPage';
import Layout from './components/layout/Layout';

import LayoutDashboard from './components/layout/LayoutDashboard';
import HomePageDash from './pages-dashboard/home/HomePage';
import UserPageDash from './pages-dashboard/user/UserPage';
import CategoryPageDash from './pages-dashboard/category/CategoryPage';
import ProductPageDash from './pages-dashboard/product/ProductPage';
import OrderPageDash from './pages-dashboard/order/OrderPage';
import CartPageDash from './pages-dashboard/cart/CartPage';
import ReportPageDash from './pages-dashboard/report/ReportPage';


function App() {

  console.log(window.location.pathname);
  // check is has path "dashboard"
  const isDashboard = window.location.pathname.includes('dashboard'); // true or false

  return (
    <BrowserRouter>

      { !isDashboard &&
        <div>
          <Layout />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
        </div>
      }

      { isDashboard && 
        <div>
          <LayoutDashboard />
          <Routes>
            <Route path="dashboard">
              <Route path="" element={<HomePageDash/>} />
              <Route path="customer" element={<LayoutDashboard/>}/>
              <Route path="user" element={<UserPageDash/>}/>
              <Route path="category" element={<CategoryPageDash/>}/>
              <Route path="product" element={<ProductPageDash/>}/>
              <Route path="order" element={<OrderPageDash/>}/>
              <Route path="cart" element={<CartPageDash/>}/>
              <Route path="report" element={<ReportPageDash/>}/>
            </Route>
          </Routes>
        </div>
      }
    </BrowserRouter>
  );

}

export default App;
