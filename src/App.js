import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products/Products';

import Users from './Pages/Users/Users';
import Categories from './Pages/Categories/Categories';
import WelcomeAdmin from './Pages/WelcomeAdmin/WelcomeAdmin';
import LoginPage from './Pages/LoginPage/LoginPage';
import EditProduct from './Pages/EditProduct/EditProduct';
import EditCategory from './Pages/EditCategory/EditCategory';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import CreateCategory from './Pages/CreateCategory/CreateCategory';
import CreateProduct from './Pages/CreateProduct/CreateProduct';

import './App.css';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { AuthContext, AuthProvider } from './Context/AuthContext';
import { useContext } from 'react';

function App() {

  const [user, setUser]= useContext(AuthContext)

  return (
        <BrowserRouter>
          <Routes>

            <Route path='/' element={ user ? <Shop/> : <LoginPage/>} />


            <Route path='admin' element={ 
              user
              ?
              <WelcomeAdmin/> 
              :
              <LoginPage/>
            } 
            />


            <Route path='register' element={ <RegisterPage/> } />


            <Route path='users'>
              <Route path='' element={ user ? <Users/> : <LoginPage/> }/>
            </Route>


            <Route path='products'>
              <Route exact path='' element={ user ? <Products/> : <LoginPage/> }/>
              <Route path='create' element={ user ? <CreateProduct/> : <LoginPage/> }/>
              <Route path='edit/:id' element={ user ? <EditProduct/> : <LoginPage/> }/>
            </Route>


            <Route path='categories'>
              <Route exact path='' element={ user ? <Categories/> : <LoginPage/> }/>
              <Route path='create' element={ user ? <CreateCategory/> : <LoginPage/> }/>
              <Route path='edit/:id' element={ user ? <EditCategory/> : <LoginPage/> }/>
            </Route>


            <Route path='shop'>
              <Route exact path='' element={ user ? <Shop/> : <LoginPage/> }/>
            </Route>


            <Route path='cart'>
              <Route exact path='' element={ user ? <Cart/> : <LoginPage/> }/>
            </Route>

          </Routes>
        </BrowserRouter>
  );
}

export default App;
