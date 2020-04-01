import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Nav           from "./components/Nav";
import DataHome      from "./components/DataHome";
import DataLogin   from "./components/DataLogin";
import DataSignup from "./components/DataSignup";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component= {DataHome} />
          <Route exact path="/Login" component={DataLogin} />
          <Route exact path="/Signup" component={DataSignup} />
          {/* <Route exact path="/contact" component={DataContact} /> */}
          <Route path="/" render={() => <div>404 Error Page not found</div>} />
        </Switch>
      </Wrapper>
    </BrowserRouter>

  );
};

export default App;
