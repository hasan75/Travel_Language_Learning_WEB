import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Informations from './components/Informations/Informations';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
              <Header></Header>
              <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
