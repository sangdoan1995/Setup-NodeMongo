import './App.css';
import{Route , BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import {path} from './constanst'
import Register from './pages/Register';


const App = () => {
  
  return (
      <BrowserRouter>
        <Route exact path={path.HOME} component={Home}/>
        <Route exact path={path.SIGNIN} component={SignIn}/>
        <Route exact path={path.REGISTER} component={Register}/>
      </BrowserRouter>

  )
}

export default App;
