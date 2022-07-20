import BlanketSize from "./components/BlanketSize";
//Styles
import "./styles/_app.scss";
import NavBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BlanketSize />
    </div>
  );
}

export default App;
