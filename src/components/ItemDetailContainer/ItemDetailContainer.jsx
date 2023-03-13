import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from '../ItemDetail/ItemDetail';
import { ItemsCentered } from '../NoProduct/NoProduct.styled';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Products', productId)
        getDoc(queryDoc)
            .then(respProd => setProduct({ id: respProd.id, ...respProd.data() }))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))

    }, [productId])

    return (
        <>
            {loading ?

                <ItemsCentered>Loading ...</ItemsCentered>


                :
                <ItemDetail product={product} />
            }
        </>
    )
}