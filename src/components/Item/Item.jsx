import { Link } from 'react-router-dom'

import { ItemContainer, ItemInfo, ItemImg, ItemDescriptiveText, Title, Description, Button, ItemPrice, Ellipse, Price } from './Item.styled'

function Item(props) {
    return (
        <ItemContainer key={props.id}>
            <ItemInfo>
                <ItemImg src={props.image} />
                <ItemDescriptiveText>
                    <Title>{props.text}</Title>
                    <Description>{props.descrip}</Description>
                </ItemDescriptiveText>
                <Link to={`/detail/${props.id}`}>
                    <ItemButton />
                </Link>
            </ItemInfo>
            <ItemPrice>
                <Ellipse />
                <Price>${props.pr}</Price>
            </ItemPrice>
        </ItemContainer>
    )
}

export default Item


function ItemButton() {
    return (
        <Button>SEE DETAILS</Button>
    )
}