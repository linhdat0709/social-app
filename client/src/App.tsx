import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import { Register } from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Messenger } from "./pages/messenger/messenger";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={user ? Home : Login} />

        <Route path="/login">{user ? <Redirect to="" /> : <Login />}</Route>

        <Route path="/register">
          {user ? <Redirect to="" /> : <Register />}
        </Route>

        <Route path="/messenger">
          
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>

        <Route path="/profile/:username">
          {user ? <Profile /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
