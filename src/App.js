import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Courses from './components/Courses/Courses';
import Teachers from './components/Teachers/Teachers';
import About from './components/About/About';
import SingleCourse from './components/SingleCourse/SingleCourse';
import SingleTeacherDetails from './components/SingleTeacherDetails/SingleTeacherDetails';

function App() {

  return (
    <div className="App">
      <Router>
          <Header></Header>
        <Switch>
          <Route exact path='/'>
             <Home></Home>
          </Route>
          <Route exact path='/home'>
             <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/courses'>
            <Courses></Courses>
          </Route>
          <Route exact path='/courses/:id'>
             <SingleCourse></SingleCourse>
          </Route>
          <Route exact path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route exact path='/teachers/:teacherId'>
            <SingleTeacherDetails></SingleTeacherDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
