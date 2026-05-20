import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import TablesPage from "../pages/TablesPage";
import KitchenPage from "../pages/KitchenPage";
import OrdersPage from "../pages/OrdersPage";
export default function AppRouter(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/tables" element={<TablesPage/>}/>
        <Route path="/kitchen" element={<KitchenPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}