import logo from './images/logo.svg';
import './styles/App.css';
import { getDistance } from 'geolib';
import New from './components/New';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const distance = getDistance(
    { latitude: 6.49851, longitude: 3.35328 },
    { "latitude": -23.54773, "longitude": -46.64784 }
  );
  const random_number = Math.random() * 10 + 1; 

  return (
    <div className="App">
      <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Random number: {random_number.toPrecision(1)}</p>
        <p>Distance from nigeria to Brazil is {distance / 1000} Kilometers</p>
      </header>
      <New />
    </div>
  );
}

export default App;
