import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#282c34")

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  const clickRandomColorBtn = () => {
    setBackgroundColor(getRandomColor())
  }
  return (
    <div className="App">
      <header className="App-header" style={{ background: backgroundColor }}>
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
        <button style={{ padding: "10px 15px", marginTop: "2rem", backgroundColor: "rgb(255 255 255 / 45%)", border: "1px solid gray", borderRadius: "5px" }} onClick={clickRandomColorBtn}>Random Color</button>
      </header>
    </div>
  );
}

export default App;
