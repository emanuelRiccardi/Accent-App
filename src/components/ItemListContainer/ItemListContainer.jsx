import React from 'react'
import { useEffect, useState } from 'react';
import { gFetch } from '../../../utils/gFetch';
import ItemsList from '../ItemList/ItemList';
import Item from '../Item/Item';

export const ItemListContainer = ( {saludos}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)

    useEffect(()=>{
        gFetch()
        .then(resp => setProducts(resp))
        .catch( err => console.log(err))
        .finally( ()=> setLoading(false))
    }, [])
    

    return (
        <>
        <h2>{saludos}</h2>
            { loading ? 
                    
                        <h2>Cargando ...</h2>
                    
                    
                : 
                <ItemsList>
                    {   products.map( product => (
                        <Item
                            key={product.id}
                            id={product.id}
                            text={product.name}
                            descrip={product.category}
                            image={product.img}
                            pr={product.price}
                        /> 
                    ))
                    }
                </ItemsList>
            }
        </>
    )
}
