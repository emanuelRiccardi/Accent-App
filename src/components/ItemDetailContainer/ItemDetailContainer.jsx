import React from 'react'
import { useEffect, useState } from 'react';
import { gFetch1 } from '../../../utils/gFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading ] = useState(true)

    useEffect(()=>{
        gFetch1()
        .then(resp => setProduct(resp))
        .catch( err => console.log(err))
        .finally( ()=> setLoading(false))
    }, [])

    return(
        <>
            { loading ? 
                    
                        <h2>Cargando ...</h2>
                    
                    
                : 
                <ItemDetail product={product} />

            }
        </>
    )
}