import React from 'react'
import { Navbar, Sections, Logo, LogoText, Items, Itemdiv, Item } from './NavBar.styled';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const NavBar = (props) => {
    const {titleIcon, furniture, bundles, journal, aboutUs} = props;
    return (
    <Navbar>
        <Sections>
            <Logo>
                <NavLink to='/'>{titleIcon}</NavLink>
                {/* <LogoText>{titleIcon}</LogoText> */}
            </Logo>
        <Items>
            <Itemdiv>
                    <NavLink to='category/sofa'> {furniture} </NavLink>
                    {/* <Item>{furniture}</Item> */}
            </Itemdiv>
            
            <Itemdiv>
                    <NavLink to='category/table'> {bundles} </NavLink>
                    {/* <Item>{bundles}</Item> */}
            </Itemdiv>

            <Itemdiv>
                    <Item>{journal}</Item>
            </Itemdiv>

            <Itemdiv>
                    <Item>{aboutUs}</Item>
            </Itemdiv>

            <NavLink to='/cart'> <CartWidget/> </NavLink> 
        </Items>
        </Sections>
    </Navbar>
    )
}

export default NavBar










