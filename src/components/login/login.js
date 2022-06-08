import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useState }  from 'react';

export default function Login() {
    const [login, generateLogin] = useState({})
    const [user, generateUser] = useState({})
    const [loginStatus, setStatus] = useState(false);

    function getUser() {
        const db = getFirestore()
        const dbQuery = doc(db, `user`, `PyQb0tAUR2vfx4oEasl2`)
        getDoc(dbQuery) 
        .then(resp => generateUser( {id: resp.id, ...resp.data()}))
        .finally ( compareLogin())
    }

    function generateCustomer(e) {
        generateLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    function compareLogin() {
        if (user.user === login.user && user.password === login.password) {
            setStatus(true);
        } else { 
           alert("Login failed");
        }
    }

    if (loginStatus) {
        return (
            <div  className="orderBody">
                <h4>Login logrado</h4>
            </div>
        );
    } else if (loginStatus === false) {
          return (

            <div className="orderBody">
                <form className="inputGroup" action="">
                    <input name="user" onChange={(e) => generateCustomer(e)} type="text" placeholder="Usuario" />
                    <input name="password" onChange={(e) => generateCustomer(e)} type="password" placeholder="Contraseña" />
                </form>
                <button onClick={getUser}>Enviar pedido</button>
            </div>
    )
    }
  
}
