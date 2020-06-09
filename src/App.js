import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList'
import NavBar from './components/NavBar'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <NavBar />
      <p></p>
      <Login />
      <BookList />
    </div>
  );
}

export default App;
