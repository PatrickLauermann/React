import React, { useState } from 'react';
import Login from './pages/Login';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Main from './pages/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BellowGrade from './pages/BellowGrade';
import AddStudent from './pages/AddStudent';
import SignUp from './pages/Signup';

const App = () => {
  const [render, setRender] = useState(false);

  const reRender = () => {
    setRender(!render);
  }

  return (
    <div className="background-color">
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/bellow-grade" component={BellowGrade} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
