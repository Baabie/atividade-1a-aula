import { Link } from "react-router-dom";
import ListaMercado from "../components/ListaMercado";
import ButtonDefault from "../components/ButtonReact";

function Home (){
    return(
        <>
            <div>
                <h1>Lista de compras</h1>
                <ListaMercado/>
            </div>

            <Link to={"/login"}>
                <ButtonDefault title="Sair"/>
            </Link>
        </>
    )
}

export default Home;