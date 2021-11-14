import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import Modelization from "./pages/modelization/Modelization";
import NewModelization from "./pages/new-modelization/NewModelization";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/new-modelization">
        <NewModelization />
      </Route>
      <Route path="/modelization/:id">
        <Modelization />
      </Route>
      <Route path="*">
        <Home />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
