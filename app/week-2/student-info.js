import Link from "next/link";

export default function StudentInfo(){
    return(
        <div className = "flex flex-col justify-center items-center p-3">
            <p>Hello! My name is Natalia.</p>
            <Link href="https://github.com/nmgoddard/cprg306-assignments" 
            className="text-cyan-500 underline hover:text-cyan-200 hover:no-underline">This is the link to the repository for this project.</Link>
        </div>
    );
}