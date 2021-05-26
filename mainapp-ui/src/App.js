import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from "./components/pages/MainPage";
import { BoardPage } from "./components/pages/BoardPage";
import { ThreadDetailPage } from "./components/pages/ThreadDetailPage";
import { Registration } from './components/pages/Registration';
import { Login } from './components/pages/Login';
import { getCookie } from './helpers/Cookies';
import { useDispatch } from "react-redux";
import { api_success, set_token } from "./reducers/UserSlice";
import { useFetch } from './helpers/useFetch';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const [methods, res, loading, isError] = useFetch();
  useEffect(() => {
    if (getCookie('authToken')) {
      const token = getCookie('authToken');
      dispatch(set_token(token));
      methods.get("/users/auth_token/1", token);
    }
  }, [])

  useEffect(() => {
    if (res) {
      console.log(res, 'app.js useEffect')
      dispatch(api_success({
        user: {
          email: res.email,
          username: res.username,
          isStaff: res.is_staff
        },
        token: res.token
      }))
    }
  }, [res])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path='/board/:id' exact component={BoardPage} />
          <Route path='/thread/:id' exact component={ThreadDetailPage} />
          <Route path='/register' exact component={Registration} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
