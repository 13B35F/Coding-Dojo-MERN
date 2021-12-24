import "./App.css";
import {Router} from "@reach/router";
import Home from "./components/home";
import Display from "./components/Display"
import DisplayWord from "./components/DisplayWord";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Display path="/:intOrWord"/>
        <DisplayWord path=":word/:fontColor/:backgroundColor"/>
      </Router>
    </div>
  );
}
export default App;