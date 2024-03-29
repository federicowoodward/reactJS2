import { doc, getDoc, getFirestore} from "firebase/firestore";
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import { useState }  from 'react';
import Swal from "sweetalert2";
import "./login.css";
export default function Login() {
    const [login, setLogin] = useState({})
    const [user, generateUser] = useState({})
    const [loginStatus, setStatus] = useState(false);

    const db = getFirestore()
    const dbQuery = doc(db, `user`, `PyQb0tAUR2vfx4oEasl2`)
    getDoc(dbQuery) 
    .then(resp => generateUser( {id: resp.id, ...resp.data()}))

    function generateLogin(e) {
        setLogin({
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
            <div  className="loginBodyTrue">
                <div className="text">
                    <h4>Login logrado</h4>
                    <p><strong>Bienvenido: </strong>{user.user}</p>
                    <p>Opciones:</p>
                </div>
                <div className="buttons">
                    <Link to="/upload">
                        <button>Subir foto</button>
                    </Link>
                    <Link to="/deleter">
                        <button>Eliminar fotos</button>
                    </Link>
                    <Link to="/categoryManager">
                        <button>Administrar categorias</button>
                    </Link>
                </div>
            </div>
        );
    } else if (loginStatus === false) {
          return (
            <div className="loginBody">
                <form className="inputGroup">
                    <input name="user" onChange={(e) => generateLogin(e)} type="text" placeholder="Usuario" />
                    <input name="password" autoComplete="on" onChange={(e) => generateLogin(e)} type="password" placeholder="Contraseña" />
                </form>
                <button onClick={compareLogin} className="btn">Entrar</button>
            </div>
    )
    }
  
}
