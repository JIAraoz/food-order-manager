import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";

export default function MainLayout(){
    return(
        <div className="bg-zinc-950
text-zinc-100 min-h-screen">
        <Header></Header>
        <Outlet/>
        <BottomNavbar></BottomNavbar>
        </div>
    )
}