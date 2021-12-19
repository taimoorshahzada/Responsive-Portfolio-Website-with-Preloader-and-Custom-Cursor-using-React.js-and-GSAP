import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import ScrollToTop from './ScrollToTop/ScrollToTop';
function App() {
  return (
    <div>
    <Router>
    <div className="noise"></div>
    <div className="App">
    <ScrollToTop />
      <Switch>
        <Route path="/" exact><Home /></Route>
      </Switch>
      <Switch>
        <Route path="/about" exact><About /></Route>
      </Switch>
      <Switch>
        <Route path="/projects" exact><Projects /></Route>
      </Switch>
      <Switch>
        <Route path="/contact" exact><Contact /></Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
