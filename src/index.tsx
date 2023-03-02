import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Provider } from 'react-redux';
import { Home, Contact, About, Wine, SignIn } from './components';
import './style.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { store } from './redux/store';

let myTitle = "Josias's Wine Dispensary"

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      {/* Applies {store} to the component nested. */}
    <Provider store={store}>  
    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle} />
        </Route>
        <Route path='/wine'>
          <Wine></Wine>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>


        </Switch>
      </Router>
    </Provider>
    </FirebaseAppProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

