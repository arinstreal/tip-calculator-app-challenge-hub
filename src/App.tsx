import './App.scss';
import Calculator from "./Components/Calculator/Calculator";
import logo from "./images/logo.svg"

function App() {
  return (
    <div className="app">
      <div>
        <img className="logo" src={logo} alt="logo"/>
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
