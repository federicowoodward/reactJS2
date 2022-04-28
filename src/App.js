import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';

function App() {
  const estilos = {fontSize:15}
  return (
    <div className="App">
      <NavBar />
      <header className="App-header" style={estilos}>
        
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
          hola mundo
        </a>
      </header>
      
    </div>
  );
}

export default App;
