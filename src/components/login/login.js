import { doc, getDoc, getFirestore} from "firebase/firestore";
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import { useState }  from 'react';
import Swal from "sweetalert2";
export default function Login() {
    const [login, generateLogin] = useState({})
    const [user, generateUser] = useState({})
    const [loginStatus, setStatus] = useState(false);

    const db = getFirestore()
    const dbQuery = doc(db, `user`, `PyQb0tAUR2vfx4oEasl2`)
    getDoc(dbQuery) 
    .then(resp => generateUser( {id: resp.id, ...resp.data()}))

    function generateLogin(e) {
        generateLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }
    function compareLogin() {
        const MySwal = withReactContent(Swal)
        if (user.user === login.user && user.password === login.password) {
            setStatus(true);
        } else { 
            MySwal.fire({
                title: <p>Login error!</p>,
                icon: "error"
            })
        }
    }

    if (loginStatus === true) {
        return (
            <div  className="orderBody">
                <h4>Login logrado</h4>
                <p>Bienvenido: {user.user}</p>
                <p>Opciones:</p>
                <Link to="/upload">
                    <button>Subir foto</button>
                </Link>
                <Link to="/deleter">
                    <button>Eliminar fotos</button>
                </Link>
            </div>
        );
    } else if (loginStatus === false) {
          return (
            <div className="orderBody">
                <form className="inputGroup" action="">
                    <input name="user" onChange={(e) => generateLogin(e)} type="text" placeholder="Usuario" />
                    <input name="password" autoComplete="on" onChange={(e) => generateLogin(e)} type="password" placeholder="Contraseña" />
                </form>
                <button onClick={compareLogin}>Entrar</button>
            </div>
    )
    }
  
}
