"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({itemList}){
  
  const [sortBy, setSortBy] = useState("name")

  itemList.sort((a, b) =>{
    let itemA = a[sortBy].toUpperCase();
    let itemB = b[sortBy].toUpperCase();
    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
      return 0;       
  })

  const handleNameSort = (event) => {
    event.preventDefault();
    setSortBy("name")
  }
  const handleCategorySort = (event) => {
    event.preventDefault();
    setSortBy("category")
  }

  let buttonStyle = "bg-green-600 px-3 py-2 rounded drop-shadow-sm mx-1 mt-2 hover:bg-green-500 active:bg-green-700 active:text-green-300 max-w-sm"

  return(
    <div>
      <div className="flex flex-col m-8">
        <button className={buttonStyle} onClick={handleNameSort}>Sort by Name</button>
        <button className={buttonStyle} onClick={handleCategorySort}>Sort by Category</button>
      </div>
      
      <ul>
        {itemList.map( (item) => (
          <Item name={item.name} quantity={item.quantity} category={item.category} key={item.name+item.quantity+item.category}/>
        ))}
      </ul>
    </div>
      
  );
}