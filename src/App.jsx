import logo from './logo.svg';
import './App.css';
import {Books} from "./components/Books"
import {Inkpens} from "./components/Inkpens"
import {Notebooks} from "./components/Notebooks"
import {Pens} from "./components/Pens"


function App() {
  return (
    <div className="App">
      <Books/>
      <Inkpens/>
      <Notebooks/>
      <Pens/>
    </div>
  );
}

export default App;
