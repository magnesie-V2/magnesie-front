import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Modelization from "./pages/modelization/Modelization";
import NewModelization from "./pages/new-modelization/NewModelization";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/new-modelization">
        <NewModelization />
      </Route>
      <Route path="/modelization/:id">
        <Modelization />
      </Route>
      <Route path="*">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
