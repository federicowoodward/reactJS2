import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.js';
import Contenedor from './components/itemListContainer.js';
import Landing from './components/landing.js';

export default function App() {
  return (
    <div>
      <nav>
         <NavBar/>
      </nav>
      <body>
        < Landing/>
        <Contenedor/>
      </body>
      <footer>
         <Footer/>
      </footer>
    </div>
  )
}


