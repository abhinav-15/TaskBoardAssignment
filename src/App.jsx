import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import CreateList from './components/CreateList';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'; // Update with your backend URL

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-list" element={<CreateList />} />
      </Routes>
    </Router>
  );
};

export default App;
