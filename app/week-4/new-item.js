"use client"

import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1)
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

    return (
        <div className="flex flex-col justify-center items-center m-10 px-10 py-6 bg-green-950 border-t-4 border-green-600 rounded-b-lg w-100">
            <h2 className="text-3xl text-green-200 mb-2">Current Quantity: {quantity}</h2>
            <div>
                <button onClick ={decreaseQuantity} disabled={decreaseDisable} className={buttonStyle}>Remove 1</button>
                <button onClick ={increaseQuantity} disabled={increaseDisable} className={buttonStyle}>Add 1</button>
            </div>
        </div>
    );
}