import Link from "next/link";
import StudentInfo from "./student-info";


export default function ShoppingList() {
    return(
        <main className = "flex flex-col justify-center items-center m-4 p-4">
            <h1 className = "text-3xl underline">Shopping List</h1>
            <StudentInfo/>
            <Link href="../"
            className="text-cyan-500 underline hover:text-cyan-200 hover:no-underline">Back</Link>
        </main>
    );
}