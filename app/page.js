import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center m-4 p-4">
      <h1 className="text-3xl underline">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="my-4">
        <li>
          <Link href="./week-2"
          className="text-cyan-500 underline hover:text-cyan-200 hover:no-underline">Week 2</Link>
        </li>
      </ul>
    </main>
  );
}
