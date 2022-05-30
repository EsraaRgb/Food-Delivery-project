
import About from '../About/About';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Notfound from '../Notfound/Notfound';
import Register from '../Register/Register';
import Footer from '../Footer/Footer'
import Admin from '../Admin/Admin';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import User from '../User/User';

function App() {
  let [loginData, setLoginData] = useState(null);/// Step 2
  function setUserData() {  /// Step 3
    let token = localStorage.getItem('token');
    let decodedToken = jwtDecode(token);//hold object that returned from token after decoding
    setLoginData(decodedToken);
    console.log(loginData);
  }
  let navigateLogin = useNavigate();
  function logOut() {
    localStorage.removeItem('token');
    setLoginData(null);
    navigateLogin('/login')
  }
  useEffect(() => {
    if (localStorage.getItem('token')) { // if user logged in
      setUserData();
    }
  },)
  return (
    <>
      <Navbar loginData={loginData} logOut={logOut} />
      <div className="container">
        <Routes>
          
          <Route element={<ProtectedRoute loginData={loginData} />}>
          
            
          </Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>  
          <Route path='admin' element={<Admin />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='login' element={<Login setUserData={setUserData} />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='forgetPassword' element={<ForgetPassword />}></Route>
          <Route path='footer' element={<Footer/>}></Route>
          <Route path='notfound' element={<Notfound/>}></Route>
          <Route path='user' element={<User/>}></Route>
        </Routes>
        
      </div>
      <Footer/>
    </>

  );
}

export default App;
