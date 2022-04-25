import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ListItem.css';


function ListItem({item}) {
    const dispatch = useDispatch();



    return (
        <div className='listItem'>
            <img src = {item.image} alt = "Item Image" width = "50px"></img>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={() => dispatch({type: 'ADD_PRICE', payload: item})}>Increase Price</button>
            <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item})}>Remove Item</button>
        </div>
    )
}

export default ListItem