import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { useCartContext } from "../../context/CartContext"
import { InputContainer, Input, CustomerForm } from './OrderForm.styled'
import { Button } from '../Item/Item.styled'

function OrderForm(props) {

    const { cartList, totalPrice, emptyCart } = useCartContext()

    const { setId } = props

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        validateEmail: ''
    })

    const generateOrder = (event) => {
        event.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.totalPrice = totalPrice()
        order.products = cartList
            .filter(({ name, price }) => name && price)
            .map(({ id, name, price }) => ({ id, name, price }));

        const db = getFirestore()
        const queryCollection = collection(db, 'Orders')

        {
            dataForm.validateEmail == dataForm.email ?

            addDoc(queryCollection, order)
                .then(resp => setId(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    emptyCart()
                    setDataForm({
                        name: '',
                        phone: '',
                        email: ''
                    })
                })

            : window.alert("Your emails does not match")
        }
    }

    const handleOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <InputContainer>
                <h2>Complete this form to complete your purchase</h2>
                <CustomerForm onSubmit={generateOrder}>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Enter your Name'
                        onChange={handleOnChange}
                        required
                        value={dataForm.name}
                    />

                    <Input
                        type='text'
                        name='phone'
                        placeholder='Enter your Phone Number'
                        onChange={handleOnChange}
                        required
                        value={dataForm.phone}
                    />

                    <Input
                        type='text'
                        name='email'
                        placeholder='Enter your Email'
                        onChange={handleOnChange}
                        required
                        value={dataForm.email}
                    />

                    <Input
                        type='text'
                        name='validateEmail'
                        placeholder='Validate your Email'
                        onChange={handleOnChange}
                        required
                        value={dataForm.validateEmail}
                    />
                    <Button>Generate Order</Button>
                </CustomerForm>
            </InputContainer>
        </>
    )
}

export default OrderForm