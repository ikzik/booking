import React from 'react';
import './App.css';
import Cars from './pages/Cars.jsx';
import { Route } from 'react-router-dom';

const App = () => <Route exact path='/' component={ Cars } />

export default App;
