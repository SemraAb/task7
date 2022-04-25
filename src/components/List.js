import React, { useEffect } from 'react'
import ListItem from './ListItem';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';

function List() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://vuejsproject-806e8-default-rtdb.firebaseio.com/AllProducts.json')
        .then(res => res.json())
        .then(info => {
            dispatch({type: 'GET_ALL_DATA', payload: info})
        });
    }, []);


    return (
        <div className='list'>
            {state?.map((item, id) => (
                <ListItem key = {id} item = {item}></ListItem>
            ))}
        </div>
    )
}

export default List