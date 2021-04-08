import React from 'react';
import './App.css';
import { Header } from './components/Home/Header';
import { News } from './components/Home/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Inbox } from './components/Inbox/Inbox';
import { Explore } from './components/Explore/Explore';

function App() {

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/home" component={News} />
          <Route path="/inbox" component={Inbox}/>
          <Route path="/explore" component={Explore}/>
        </Switch>
    </Router>

  );
}

export default App;
