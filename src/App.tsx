import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import Modelization from "./pages/modelization/Modelization";
import NewModelization from "./pages/new-modelization/NewModelization";
import PendingModelization from "./pages/pending-modelization/PendingModelization";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/new-modelization" element={<NewModelization />} />
      <Route
        path="/pending-modelization/:id/:name"
        element={<PendingModelization />}
      />
      <Route path="/modelization/:id" element={<Modelization />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
