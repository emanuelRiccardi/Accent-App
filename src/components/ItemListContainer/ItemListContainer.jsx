import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../../utils/gFetch';
import ItemList from '../ItemList/ItemList';


export const ItemListContainer = ( {saludos}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
    
    if ( categoryId ){
        gFetch()
        .then(resp => setProducts(resp.filter(product=> product.category=== categoryId )))
        .catch( err => console.log(err))
        .finally( ()=> setLoading(false))
    }
    else{
        gFetch()
        .then(resp => setProducts(resp))
        .catch( err => console.log(err))
        .finally( ()=> setLoading(false))
    }
    }, [categoryId])

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
