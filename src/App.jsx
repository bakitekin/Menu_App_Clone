import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import Home from "./page/Home";
import Menu from "./components/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
