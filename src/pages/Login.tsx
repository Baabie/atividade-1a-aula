import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonReact";

function Login() {
    return(
        <>
            <h1>Login</h1>

            <label htmlFor="">E-mail</label>
            <input type="text" />

            <label htmlFor="">Senha</label>
            <input type="text" />

            <Link to="/">
                <ButtonDefault title="Login"/>
            </Link>

            <Link to="/cadastro">
                <ButtonDefault title="Cadastre-se"/>
            </Link>
        </>
    )
}

export default Login;