import { useParams } from "react-router-dom"
import { tables } from "../mocks/tables"
export default function TableDetailPage(){
const {id} = useParams<{id: string}>()
const table = tables.find(e=>e.id === parseInt(id || ""))

    return(
        <div className="bg-zinc-900 border-zinc-800 rounded-2xl p-4 flex flex-col gap-2 m-5">
            <h1>Table {id} Detail Page</h1>
            <span>1x Hamburguesa</span>
            <span>1x Pizza</span>
            <span>2x Coca-Cola 1,5L</span>
            <span>Total: {table?.total}</span>
        </div>
    )
}