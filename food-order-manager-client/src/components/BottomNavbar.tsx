import { Link } from "react-router-dom";

export default function BottomNavbar(){

    return(
        <nav>
            <Link to="/">home</Link>
            <Link to="/kitchen">kitchen</Link>
            <Link to="/tables">tables</Link> 
        </nav>
    )
}