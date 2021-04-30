import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Home, ErrorUrl } from "./Views/IndexImports";
import GeneralContext from "./context/GeneralContext";

const App = () => {
  return (
    <GeneralContext>
      <BrowserRouter>
        {/* RUTAS */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          <Route path="/*" component={ErrorUrl} />
        </Switch>
      </BrowserRouter>
    </GeneralContext>
  );
};

export default App;
