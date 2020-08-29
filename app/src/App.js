import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Thread from './components/Thread';

function App() {
  return (
    <div className="App">
	    <div className="App-content">
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Thread} /> {/*todo: make Home component*/}
            <Route path='/profile/:id' component={Profile} />
            <Route path='/thread' component={Thread} />
          </Switch>
          {/* <Profile /> */}
          {/* <Thread/> */}
          {/* <Footer /> */}
        </Router>
	    </div>
    </div>
  );
}

export default App;
