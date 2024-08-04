import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CartList from './components/CartList';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="">
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route element={<PrivateRoute />}>
              <Route path="/booklist" element={<BookList />} />
              <Route path="/cartlist" element={<CartList />} />
            </Route>
        </Routes>
          
{/*        
        <BookList />
        <CartList cartData={cartData}/>
        <Login /> */}
      </AuthProvider>
      </Router>
     
    </div>
  );
}

export default App;
