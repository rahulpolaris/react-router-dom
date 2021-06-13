// import { Console } from 'node:console';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from './Spinner/Spinner'
import "./Shop.scss";
export default function Shop({ setcurrentItemId, currentItemId ,currentItem,setCurrentItem}) {
  const [list, setList] = useState([]);


  function getItemDEtails(extractedId) {
   
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${extractedId}`,
      {
        method: "get",
        headers: new Headers({ Authorization: "authorization" }),
      }
    )
      .then((data) => data.json())
      .then((data) => {console.log(data.data.item);setCurrentItem(data.data.item)});
  }


  function handleItemInfo(e) {
    console.log(e);
    const uri = e.target.href;
    const pos = uri.search("Shop") + 5;
    const extractedId = uri.slice(pos);
    console.log(`%c ${extractedId}`, "color:red");
    setcurrentItemId(extractedId);
    getItemDEtails(extractedId)
  }

 

  useEffect(() => {
    fetch("https://fortnite-api.theapinetwork.com/items/list", {
      method: "get",
      headers: new Headers({ Authorization: "authorization" }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.data);
        setList(data.data);
      });
  }, []);
  if(list.length===0){
    return <Spinner/>
  }


  return (
    <div id="Shop">
      {/* <h1>Shop </h1> */}
      {list.map((item, index) => {
        return (
          <h2 key={item.itemId} onClick={handleItemInfo}>
            <Link to={`/Shop/${item.itemId}`}>{item.item.name}</Link>
          </h2>
        );
      })}
    </div>
  );
}
