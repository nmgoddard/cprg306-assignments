"use client"

import { useState } from "react";

export default function NewItem({addItemFunc}){
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increaseQuantity = () => {
        if (quantity < 20){
            setQuantity(quantity+1)
        }

    }
    const decreaseQuantity = () => {
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }
    let buttonStyle = "bg-green-600 px-3 py-2 rounded drop-shadow-sm mx-1 mt-2 hover:bg-green-500 active:bg-green-700 active:text-green-300 disabled:bg-slate-400 disabled:text-slate-50"
    let increaseDisable = false
    let decreaseDisable = false
    if (quantity >=20){
        increaseDisable = true
    }
    if (quantity <=1){
        decreaseDisable = true
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            name: name,
            quantity: quantity,
            category: category
        };
        addItemFunc(item)
        setQuantity(1);
        setName("");
        setCategory("produce")
    };

    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center m-10 mr-0 px-10 py-2 max-h-36 bg-green-950 border-t-4 border-green-600 rounded-b-lg w-100">
                <h2 className="text-3xl text-green-200 mb-2">Current Quantity: {quantity}</h2>
                <div>
                    <button onClick ={decreaseQuantity} disabled={decreaseDisable} className={buttonStyle}>-</button>
                    <button onClick ={increaseQuantity} disabled={increaseDisable} className={buttonStyle}>+</button>
                </div>
            </div>
            <div className="m-10 ml-0 mt-7 px-10 py-2">
                <div className="my-2">
                    <label className="inline-block w-24 text-xl text-green-200">Name:</label>
                    <input className="inline-block w-40 h-6 text-green-950 text-lg px-1 rounded-sm bg-green-200" 
                    type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="my-2">
                    <label className="inline-block w-24 text-xl text-green-200">Category:</label>
                    <select className = "inline-block w-40 h-6 text-green-950 text-lg rounded-sm bg-green-200" 
                    onChange={(event => setCategory(event.target.value))} value={category}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen food">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <div>
                    <button className={`${buttonStyle} text-lg ml-0 w-64`} onClick={handleSubmit}>Add item!</button>
                </div>
            </div>
        </div>
        
        
    );
}