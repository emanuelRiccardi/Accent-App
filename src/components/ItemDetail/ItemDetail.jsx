import { Container } from './ItemDetail.styled';
import OneItem from '../OneItem/OneItem';


function ItemDetail(props) {

    const { product } = props;

    return (
        <Container>

            <OneItem
                key={product.id}
                id={product.id}
                text={product.name}
                descrip={product.category}
                info={product.description}
                image={product.img}
                pr={product.price}
            />
        </Container>
    )
}

export default ItemDetail