import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext"
import React from 'react'
import { useEffect, useState } from 'react';
import { InputContainer, Input } from './OrderForm.styled'

function OrderForm() {

    const { cartList, totalPrice } = useCartContext()

    const [dataForm, setDataForm] = useState({
        name:'',
        phone:'',
        email:''
    })

    const generateOrder = (event) =>{
        event.preventDefault()
        const order ={}
        order.buyer = dataForm
        order.totalPrice = totalPrice()
        order.products = cartList.map(({id, name, price}) => ({id, name, price}))
        console.log(order)

        const db = getFirestore()
        const queryCollection = collection(db, 'Orders')

        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=>{})
    }

    const handleOnChange = (event) =>{
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    return (
        <InputContainer>
            <h2>Complete this form</h2>
            <form onSubmit={generateOrder}>
                <Input
                    type='text'
                    name='name'
                    placeholder='enter name'
                    onChange={handleOnChange}
                    required
                    value={dataForm.name}
                />

                <Input
                    type='text'
                    name='phone'
                    placeholder='enter phone'
                    onChange={handleOnChange}
                    required
                    value={dataForm.phone}
                />

                <Input
                    type='text'
                    name='email'
                    placeholder='enter email'
                    onChange={handleOnChange}
                    required
                    value={dataForm.email}
                />

                <Input
                    type='text'
                    name='validateEmail'
                    placeholder='validate Email'
                    onChange={handleOnChange}
                    // required
                    // value={dataForm.validateEmail}
                />
                <button>Generate Order</button>
            </form>
        </InputContainer>
    )
}

export default OrderForm