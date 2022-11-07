import Home from "./Components/Home";
import List from "./Components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
