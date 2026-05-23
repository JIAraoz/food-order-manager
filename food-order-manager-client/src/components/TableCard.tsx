import { Link } from "react-router-dom";

const statusStyles = {
  free: "bg-emerald-500",
  occupied: "bg-red-500",
  preparing: "bg-amber-500",
} as const

type Status = keyof typeof statusStyles;

type TableCardProps = {
    number: string | number;
    status: Status;
    total: string | number;
};

export default function TableCard({ number, status, total }: TableCardProps){

    return(
        <Link to={`/tables/${number}`}>
            <div className="tableCard bg-zinc-900 border-zinc-800 rounded-2xl p-4 flex flex-col gap-2 m-5">
                <h3>Table {number}</h3>
                <span className={`${statusStyles[status] || "bg-gray-500" } rounded-2xl `}>{status}</span>
                <span>Total: {total}</span>
            </div>
        </Link>
    )
}