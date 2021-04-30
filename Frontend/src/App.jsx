import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Home, ErrorUrl } from "./components/ViewImports";

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={Login} />
          <Route path="/home" render={Home} />
          <Route path="/*" render={ErrorUrl} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
