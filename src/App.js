import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicLibrary from './Music/MusicLibrary';
import BookLibrary from './BookLibrary/BookLibrary';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/booklibrary">
            <Header />
            <BookLibrary />
          </Route>
          <Route path="/musiclibrary">
          <Header />
            <MusicLibrary />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
