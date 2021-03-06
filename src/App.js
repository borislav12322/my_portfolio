import './App.scss';
import React from 'react';
import Sidebar from './components/sideBar/SideBar';
import MainPage from './components/mainPage/MainPage';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import { Route, Switch, withRouter } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Switch>
        <React.Fragment>
          <main className="app__container">
            <Route path="/" exact>
              {({ match }) => <MainPage show={match !== null} />}
            </Route>
            <Route path="/about">
              {({ match }) => <About show={match !== null} />}
            </Route>
            <Route path="/contacts">
              {({ match }) => <Contacts show={match !== null} />}
            </Route>
            <Route path="/portfolio">
              {({ match }) => <Portfolio show={match !== null} />}
            </Route>
          </main>
          </React.Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
