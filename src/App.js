import BlanketSize from "./components/BlanketSize";
import GridCards from "./components/GridCards";
import Cards from "./components/Cards";
//Pages
import HomePage from "./pages/HomePage";
import BlanketPage from "./pages/BlanketPage";
import ScarfPage from "./pages/ScarfPage";
import RaglanPage from "./pages/RaglanPage";
//Styles
import "./styles/_app.scss";
import NavBar from "./components/Nav";
//Route
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/blanket" exact element={<BlanketPage />} />
        <Route path="/scarf" exact element={<ScarfPage />} />
        <Route path="/raglan" exact element={<RaglanPage />} />
      </Routes>
    </div>
  );
}

export default App;
