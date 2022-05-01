import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.js';
import Contenedor from './components/itemListContainer.js';

function App() {
  return (
    <div className="App">
      
      <NavBar/>

      <header className="App-header">
        
       <Contenedor/>
        
      </header>

      <Footer/>

    </div>
  );
}

export default App;
