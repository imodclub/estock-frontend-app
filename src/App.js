import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Pages/Signin/Signin'
import Authfromgoogle from './Pages/Auth/Authfromgoogle'
import Home from './Pages/Home/index'
import User from './Pages/Users/User';
import SignUp from './Pages/Signup/SignUp';



function App() {
  // const token = localStorage.getItem('accessToken');
  // if (!token) {
  //   return <Signin />
  // }
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/auth">
            <Authfromgoogle />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/signup">
            <SignUp name={'Kamol'} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
