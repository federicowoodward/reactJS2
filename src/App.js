import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.js';
import Contenedor from './components/itemListContainer.js';

export default function App() {
  return (
    <div>
      <nav>
         <NavBar/>
      </nav>
      <body>
        <Contenedor/>
      </body>
      <footer>
         <Footer/>
      </footer>
    </div>
    
  )
}


