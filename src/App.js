
import './App.css';
import React from 'react';
import Home from './components/home/Home';
import { Route,Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/profile/Profile';
import ProtectedRoute from './components/common/ProtectedRoute';


function App() {
  return (
   <React.Fragment>
      <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Signup/>} path='/signup'/>
          <Route element={<ProtectedRoute Component={Profile}/>} path='/profile'/>
      </Routes>
   </React.Fragment>
  );
}

export default App;
