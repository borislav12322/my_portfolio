import './App.css';
import Sidebar from './components/sideBar/SideBar';
import MainPage from './components/mainPage/MainPage';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import { Route, Switch, withRouter } from 'react-router';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';



function App(props) {


  return (
    <>
      <div className="App">

        <Sidebar />
        <main className="app__container">
              
                <Switch>
                  <Route path='/' exact component={MainPage} />
                  <Route path='/about' component={About} />
                  <Route path='/portfolio' component={Portfolio} />
                  <Route path='/contacts' component={Contacts} />
                </Switch>

          
        </main>
      </div>

    </>
  );
}

export default  withRouter(App);
