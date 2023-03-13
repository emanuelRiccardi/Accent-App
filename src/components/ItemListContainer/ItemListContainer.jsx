import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import { ItemsCentered } from '../NoProduct/NoProduct.styled'
import ItemList from '../ItemList/ItemList';



export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Products')

        const queryFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection

        getDocs(queryFilter)
            .then(respCollection => setProducts(respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <>
            {loading ?

                <ItemsCentered>Loading ...</ItemsCentered>


                :
                <ItemList products={products} />
            }
        </>
    )
}
