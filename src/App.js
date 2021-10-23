import './App.css';
import UIExample from './ui/UIExample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UIExample width="800" height="600" />
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
      </header>
    </div>
  );
}

export default App;
