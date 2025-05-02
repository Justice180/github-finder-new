import Navbar from './components/layout/Navbar';
import './App.css';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/alertState'
import User from './components/layout/users/User'
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/layout/pages/About';
import Home from './components/layout/pages/Home';
import NotFound from './components/layout/pages/NotFound';

const App = () => {
    return ( 
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar title='Github Finder' icon='fab fa-github' />
              <div className='container'>
                <Alert alert={alert} />
                <Routes>
                  <Route path='/' element={<Home />}>
                  </Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/user/:login' element={
                    <User />
                  }/>
                  <Route path='/' element={<NotFound />}></Route>
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}
  
export default App;
