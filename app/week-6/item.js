export default function Item({name, quantity, category}){
    return (
        <li className = "bg-green-950 m-5 rounded-r-lg border-green-600 border-l-4 max-w-sm p-5">
            <h2 className="text-3xl text-green-200 mb-2">{name}</h2>
            <p className="text-xl text-green-300">To Buy: {quantity}</p>
            <p className="text-xl  text-green-300">Section: {category}</p>
        </li>
    );
}