import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Home, ErrorUrl,NewAnimal,NewZoo } from "./Views/IndexImports";
import GeneralContext from "./context/GeneralContext";

const App = () => {
  return (
    <GeneralContext>
      <BrowserRouter>
        {/* RUTAS */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          <Route path="/home/newanimal" component= {NewAnimal} />
          <Route path="/home/newzoo" component= {NewZoo} />
        </Switch>
      </BrowserRouter>
    </GeneralContext>
  );
};

export default App;
