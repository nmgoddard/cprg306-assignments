import Link from "next/link";

export default function Home() {
  let linkStyles="text-cyan-500 underline hover:text-cyan-200 hover:no-underline active:text-cyan-600"
  return (
    <main className="flex flex-col justify-center items-center m-4 p-4">
      <h1 className="text-3xl underline">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="my-4">
        <li>
          <Link href="./week-2"className={linkStyles}>Week 2</Link>
        </li>
        <li>
          <Link href="./week-3"className={linkStyles}>Week 3</Link>
        </li>
        <li>
          <Link href="./week-4"className={linkStyles}>Week 4</Link>
        </li>
      </ul>
    </main>
  );
}
