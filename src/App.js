import './App.css';
import Sidebar from './components/sideBar/SideBar';
import MainPage from './components/mainPage/MainPage';
import About from './components/about/About';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Route path='/home' component={MainPage} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
