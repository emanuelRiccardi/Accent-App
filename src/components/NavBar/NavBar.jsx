import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { Navbar, Sections, Logo, LogoText, Items, Itemdiv, Item, StyledLink } from './NavBar.styled';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Categories')

        getDocs(queryCollection)
            .then(respCollection => setCategories(respCollection.docs.map(cat => ({ id: cat.id, ...cat.data() }))))
            .catch(err => console.error(err))
    })

    return (
        <Navbar>
            <Sections>
                <Logo>
                    <StyledLink to='/'><LogoText>Accent</LogoText></StyledLink>
                </Logo>
                <Items>
                    {
                        categories.map(category => (
                            <Itemdiv
                                key={category.id}
                            >
                                <StyledLink to={category.path}> <Item>{category.name}</Item> </StyledLink>
                            </Itemdiv>
                        ))
                    }
                    <NavLink to='/cart'> <CartWidget /> </NavLink>
                </Items>
            </Sections>
        </Navbar>
    )
}

export default NavBar










