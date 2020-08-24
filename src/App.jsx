import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './views/Homepage/Homepage';
import ShopPage from './views/Shoppage';
import SignInAndSignUppage from './views/SignInAndSignUppage';

import { auth, createUser } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  async componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({ currentUser: { id: snapShot.id, ...snapShot.data() } });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
    console.log(this.state);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:category" component={HomePage} />
          <Route exact path="/sign-in" component={SignInAndSignUppage} />
        </Switch>
      </div>
    );
  }
}

export default App;
