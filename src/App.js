import "./App.css";
import Homepage from "./components/Homepage";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-151178591-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;
