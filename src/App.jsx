import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import HomePage from './views/Homepage/Homepage';
import ShopPage from './views/Shoppage';
import SignInAndSignUppage from './views/SignInAndSignUppage';

import { setCurrentUser } from './redux/user/user-actions';

import { auth, createUser } from './firebase/firebase.utils';

class App extends Component {
  unsubscribeFromAuth = null;

  async componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
