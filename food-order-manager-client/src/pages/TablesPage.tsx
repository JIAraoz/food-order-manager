import { tables } from "../mocks/tables"
import TableCard from "../components/TableCard"
export default function TablesPage(){
    return(

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{tables.map((e)=>{
            return(<TableCard key={e.id} number={e.number} status={e.status as "free" | "occupied" | "preparing"} total={e.total} />)
        })}</div>
        
    )
}