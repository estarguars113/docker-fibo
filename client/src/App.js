import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';

// custom components
import Fib from './Fib';
import Intro from './intro';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/intro">Explanation</Link>
        </header>
      </div>
      <div>
        <Route exact path="/" component={Fib} />
        <Route exact path="/intro" component={Intro} />
      </div>
    </Router>
    
  );
}

export default App;
