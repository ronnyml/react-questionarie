import "./styles/App.css";
import Wizard from "./components/Wizard";

function App() {
  return (
    <div className="container">
      <div className="left-column"></div>
      <div className="right-column">
        <Wizard />
      </div>
    </div>
  );
}

export default App;
