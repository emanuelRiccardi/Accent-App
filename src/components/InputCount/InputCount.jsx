import { Link } from "react-router-dom";
import { ButtonCount1, ButtonContainer } from "../ItemCount/ItemCount.styled"


const InputCount= ()=> {

    return (
        <ButtonContainer    >
            <Link to='/cart' >
                <ButtonCount1 
                    onClick={()=>console.log('go to cart') } 
                >Go to Cart</ButtonCount1>
            </Link>
            <Link to='/' >
                <ButtonCount1 
                    onClick={()=>console.log('go to home') } 
                >Continue Shopping</ButtonCount1>
            </Link>
        </ButtonContainer>
    )
}

export default InputCount