import React from 'react'
import { useEffect, useState } from 'react';
import { gFetch } from '../../../utils/gFetch';
import ItemList from '../ItemList/ItemList';


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
            { loading ? 
                    
                        <h2>Cargando ...</h2>
                    
                    
                : 
                <ItemList products={products} />

            }
        </>
    )
}
