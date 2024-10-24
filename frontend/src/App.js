import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import NewMessageForm from './components/NewMessageForm';
import './App/css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/create-message">Create Message</Link>
      </nav>

      <Routes>
        <Route path="/create-message" elements={<NewMessageForm />} />
      </Routes>
    </Router>
  );
}

export default App;
