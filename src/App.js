import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicLibrary from './Music/MusicLibrary';
import BookLibrary from './BookLibrary/BookLibrary';
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import User from './User';
import Support from './Support';

function App() {

  const[state, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  })

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
          <Route path="/account/overview">
            <Header />
            <User />
          </Route>
          <Route path="/support">
            <Header />
            <Support />
          </Route>
          <Route path="/">
          <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
