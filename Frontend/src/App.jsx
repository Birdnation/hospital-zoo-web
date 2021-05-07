import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Home, ErrorUrl, NewAnimal, NewZoo, CRUDUsers, AddUser, UpdateUser } from "./Views/IndexImports";
import GeneralContext from "./context/GeneralContext";
import Routes from "./Routes";

const App = () => {
  return (
    <GeneralContext>
      <BrowserRouter>
        {/* RUTAS */}
        <Switch>
          <Route exact path={Routes.UpdateUser} component={UpdateUser} />
          <Route exact path={Routes.AddUser} component={AddUser} />
          <Route exact path={Routes.CRUDUsers} component={CRUDUsers} />
          <Route exact path={Routes.HOME} component={Home} />
          <Route exact path="/" component={Login} />
          <Route path={Routes.NUEVOANIMAL} component={NewAnimal} />
          <Route path={Routes.NUEVOZOOLOGICO} component={NewZoo} />
          <Route path="/*" component={ErrorUrl} />
        </Switch>
      </BrowserRouter>
    </GeneralContext>
  );
};

export default App;
