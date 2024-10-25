"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function ShoppingList(){

    
    let items = [...itemData]
    const [itemList, setItemList] = useState(items)

    const handleAddItem = (newItem) => {
        setItemList([...itemList, newItem])
    }
    return(
        <main className="flex flex-row">
            <ItemList itemList={itemList}/> 
            <NewItem addItemFunc={handleAddItem}/>
        </main>
    );
}