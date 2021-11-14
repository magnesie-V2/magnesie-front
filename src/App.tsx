import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import Modelization from "./pages/modelization/Modelization";
import NewModelization from "./pages/new-modelization/NewModelization";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/new-modelization" element={<NewModelization />} />
      <Route path="/modelization/:id" element={<Modelization />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
