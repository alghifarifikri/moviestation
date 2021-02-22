import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Function/Home';
import ListMovie from './Pages/Function/ListMovie';
import Detail from './Pages/Function/Detail';
import HomePage from './Pages/Function/HomePage';

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <BrowserRouter>
        <div className = "fixed-top">
          <Home />
        </div>
          <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/detail/:id" exact component = {Detail} />
              <Route path="/list" exact>
                <ListMovie />
              </Route>
          </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
