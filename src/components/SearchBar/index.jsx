import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Fuse from 'fuse.js';
import {db} from '../../firebase-config'
import { collection, getDocs } from "firebase/firestore"; 

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const itemsCollectionRef = collection(db, 'items');
    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemsCollectionRef)
            setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getItems();
    }, [])
        
        const fuse = new Fuse(items, {
            keys: ['name']
            })

        const results = fuse.search(search)
        console.log(results)

        const mapResults = results.map((results) => {
            return (
                <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3 card-body content position-relative p-0 mt-3">
                    <br/>
                    <h5>Item Name: {results.item.name}</h5>
                    <h5>Item Price: {results.item.price}</h5>
                    <h5>Item Quantity: {results.item.quantity}</h5>
                </div>
            )
        });

    const handleChange = (event) => {
        setSearch(event.target.value);
      };

    return (       
    <div>
        <TextField
                id="outlined-name"
                label="Search an item"
                value={search}
                onChange={handleChange}
            />
            <h4>{search.length > 3 && mapResults}</h4>
    </div>
  )
}

export default SearchBar