import React from 'react'
import { Navbar } from './NavBar.styled';
import { Sections } from './NavBar.styled';
import { Logo } from './NavBar.styled';
import { LogoText } from './NavBar.styled';
import { Items } from './NavBar.styled';
import { Itemdiv } from './NavBar.styled';
import { Item } from './NavBar.styled';
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










