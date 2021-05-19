import './App.css';
import Sidebar from './components/sideBar/SideBar';
import MainPage from './components/mainPage/MainPage';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Sidebar/>

        <Switch>
        <Route path='/' exact>
            <MainPage/>
          </Route>

        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contacts' component={Contacts} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
