import React from 'react';
import './App.css';
import Composers from './components/musicRelated/Composers';
import Composer from './components/musicRelated/Composer';
import Operas from './components/musicRelated/Operas';
import Opera from './components/musicRelated/Opera';
import Pieces from './components/musicRelated/Pieces';
import Piece from './components/musicRelated/Piece';
import About from './components/info/About';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <h1>mysqldocs</h1>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/operas">Operas</Link>
            <span> | </span>
            <Link to="/composers">Composers</Link>
            <span> | </span>
            <Link to="/pieces">Pieces</Link>
            <span> | </span>
            <Link to="/about">About</Link>
          </nav>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/composers" component={Composers} />
          <Route path="/composer" component={Composer} />
          <Route path="/operas" component={Operas} />
          <Route path="/opera" component={Opera} />
          <Route path="/pieces" component={Pieces} />
          <Route path="/piece" component={Piece} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}
