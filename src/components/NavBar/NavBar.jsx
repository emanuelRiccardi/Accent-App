import React from 'react'
import { Navbar, Sections, Logo, LogoText, Items, Itemdiv, Item } from './NavBar.styled';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = (props) => {
    const {titleIcon, furniture, bundles, journal, aboutUs} = props;
    return (
    <Navbar>
        <Sections>
            <Logo>
                <LogoText>{titleIcon}</LogoText>
            </Logo>
        <Items>
            <Itemdiv>
                    <Item>{furniture}</Item>
            </Itemdiv>
            
            <Itemdiv>
                    <Item>{bundles}</Item>
            </Itemdiv>

            <Itemdiv>
                    <Item>{journal}</Item>
            </Itemdiv>

            <Itemdiv>
                    <Item>{aboutUs}</Item>
            </Itemdiv>

            <CartWidget/>
        </Items>
        </Sections>
    </Navbar>
    )
}

export default NavBar










