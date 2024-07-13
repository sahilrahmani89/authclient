
import './App.css';
import React from 'react';
import Home from './components/home/Home';
import { Route,Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';


function App() {
  return (
   <React.Fragment>
      <Routes>
          <Route Component={Home} path='/'/>
          <Route Component={Login} path='/login'/>
          <Route Component={Signup} path='/signup'/>
      </Routes>
   </React.Fragment>
  );
}

export default App;
