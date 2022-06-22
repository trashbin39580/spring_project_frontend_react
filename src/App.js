import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products/Products';

import Users from './Pages/Users/Users';
import Categories from './Pages/Categories/Categories';
import WelcomeAdmin from './Pages/WelcomeAdmin/WelcomeAdmin';
import LoginPage from './Pages/LoginPage/LoginPage';
import EditProduct from './Pages/EditProduct/EditProduct';
import EditCategory from './Pages/EditCategory/EditCategory';

import './App.css';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <LoginPage/> } />

        <Route path='/register' element={ <RegisterPage/> } />

        <Route path='users'>
          <Route path='' element={ <Users/> }/>
        </Route>


        <Route path='products'>
          <Route exact path='' element={ <Products/> }/>
          <Route path='edit/:id' element={ <EditProduct/> }/>
        </Route>


        <Route path='categories'>
          <Route exact path='' element={ <Categories/> }/>
          <Route path='edit/:id' element={ <EditCategory/> }/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
