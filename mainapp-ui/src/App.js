import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from "./components/pages/MainPage";
import {BoardPage} from "./components/pages/BoardPage";
import {ThreadDetailPage} from "./components/pages/ThreadDetailPage";

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
            </Switch>
        </Router>
    </div>
  );
}

export default App;
