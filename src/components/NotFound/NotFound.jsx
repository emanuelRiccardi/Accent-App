import React from 'react'
import { Link } from 'react-router-dom'

import { MainText } from '../CartContainer/CartContainer.styled'
import { HeroContainer } from '../Hero/Hero.styled'
import { Button } from '../Item/Item.styled'
import { ItemsCentered } from '../NoProduct/NoProduct.styled'

function NotFound() {
    return (
        <HeroContainer>
            <ItemsCentered>
                <MainText>404 :(</MainText>
                <MainText>Oops! looks like we didn't craft that yet...</MainText>
                <Link to='/'>
                    <Button>Back to home</Button>
                </Link>
            </ItemsCentered>

        </HeroContainer>
    )
}

export default NotFound