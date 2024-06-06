import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'; // if you have any global styles

const App = () => {
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch stories from your backend
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => setStories(data));
  }, []);

  const handleAuth = async (credentials) => {
    // Handle authentication (login/register)
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    setUser(data.user);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home stories={stories} />
          </Route>
          <Route path="/story/:id">
            <Story stories={stories} />
          </Route>
          <Route path="/login">
            <Login handleAuth={handleAuth} />
          </Route>
          <Route path="/register">
            <Register handleAuth={handleAuth} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
