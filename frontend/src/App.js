// container for all the messages that are created
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import NewMessageForm from './components/NewMessageForm.js';
import DisplayAllMessages from './components/DisplayAllMessages.js';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/create-message">Create Message</Link>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/create-message" elements={<NewMessageForm />} />
        <Route path="/" element={<DisplayAllMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
