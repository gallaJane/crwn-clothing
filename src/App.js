import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument, db } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {doc, onSnapshot} from 'firebase/firestore'


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
const {setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
 
      if(userAuth) {  
        await createUserProfileDocument(userAuth)
 
        onSnapshot(doc(db, "users", userAuth.uid), (doc) => {
          setCurrentUser({
              id: doc.id,
              ...doc.data()
          });
        });
      } else {
        setCurrentUser(userAuth)
      }  
    })  
  }

   componentWillUnmount() {
     this.unsubscribeFromAuth();
   }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
