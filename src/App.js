import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { UserContext } from './contexts/UserContext';
import Home from './components/Home';
import { useMemo, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <UserContext.Provider value={value}>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/signin"> <SignIn /> </Route>
            <Route path="/signup"> <SignUp /> </Route>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;