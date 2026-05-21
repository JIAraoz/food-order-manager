import { Link } from "react-router-dom";

export default function BottomNavbar(){

    return(
        <nav className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 p-4 h-20 flex justify-around items-center">
            <Link to="/" className=" bg-orange-500 hover:bg-orange-400 active:scale-95 transition-all duration-200 text-white rounded-xl px-4 py-3 "><button>home</button></Link>
            <Link to="/kitchen" className=" bg-orange-500 hover:bg-orange-400 active:scale-95 transition-all duration-200 text-white rounded-xl px-4 py-3 "><button>kitchen</button></Link>
            <Link to="/tables"><button className=" bg-orange-500 hover:bg-orange-400 active:scale-95 transition-all duration-200 text-white rounded-xl px-4 py-3 ">tables</button></Link> 
        </nav>
    )
}