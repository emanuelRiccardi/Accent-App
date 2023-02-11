import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../../utils/gFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    
    const { productId }  = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)

    useEffect(()=>{
        if(productId){
            gFetch()
            .then(resp => setProducts(resp.find(product=> product.id=== productId)))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))
        }
    }, [productId])

    return(
        <>
            { loading ? 
                    
                        <h2>Cargando ...</h2>
                    
                    
                : 
                <ItemDetail products={products} />
                
            }
        </>
    )
}