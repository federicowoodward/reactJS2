import "./itemListContainer.css";
import Contador from './itemCount';
import ItemList from './itemList'

export default function Container() { 

  let demoraSimulada = new Promise((resolve, reject) => {

    setTimeout(function(){

      resolve( <ItemList /> );
      reject( alert("No se pudieron encontrar las fotos"));

    }, 2000);
  });

  

    return (
      <div className="fotoContainer">
        <div className="foto">

        </div>
            {/* <div>{greeting}</div> */}
            
            <Contador stock={5} inicial={1}/>
      </div>  
    );
}