import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicLibrary from './Music/MusicLibrary';
import BookLibrary from './BookLibrary/BookLibrary';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/booklibrary">
            <BookLibrary />
          </Route>
          <Route path="/musiclibrary">
            <MusicLibrary />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
