import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
        <Routes>
          <Route exact path="/" component={Fib} />
          <Route exact path="/intro" component={Intro} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
