import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/"> <h1>Home</h1> </Route>
          <Route path="/signin"> <SignIn /> </Route>
          <Route path="/signup"> <SignUp /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;