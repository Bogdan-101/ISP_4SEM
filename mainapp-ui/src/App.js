import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from "./components/pages/MainPage";
import { BoardPage } from "./components/pages/BoardPage";
import { ThreadDetailPage } from "./components/pages/ThreadDetailPage";
import { Registration } from './components/pages/Registration';
import { Login } from './components/pages/Login';

function App() {
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
