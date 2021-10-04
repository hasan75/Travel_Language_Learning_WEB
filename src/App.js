import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
              <Header></Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
