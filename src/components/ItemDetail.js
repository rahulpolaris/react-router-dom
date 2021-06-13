import React, { useEffect } from 'react'
import './ItemDetail.scss'
import Spinner from './Spinner/Spinner'

export default function ItemDetail({currentItem})
{   
    if(currentItem?.images?.background==='')
    {
        return <Spinner/>
    }
    const background={backgroundImage:`url(${currentItem.images.background})`}

    return <div id='ItemDetail' >
    <div className="background" style={background}></div>
    <img height='100px' width='100px' src={currentItem.images.icon} alt="icon"/>
    <h1>Name:{currentItem.name}</h1>
    <h1>{currentItem.description}</h1>

    <h1>Series:{currentItem.series}</h1>
    <h1>Type:{currentItem.type}</h1>
    <h1>Rarity:{currentItem.rarity}</h1>
    </div>
    // return <div>
    //     <h1>ItemDetailszzzzzz</h1>
    // </div>
}