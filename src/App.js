import BlanketSize from "./pages/BlanketSize";
import GridCards from "./components/GridCards";
import Cards from "./components/Cards";
//Styles
import "./styles/_app.scss";
import NavBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
      {/* <BlanketSize /> */}
    </div>
  );
}

export default App;
