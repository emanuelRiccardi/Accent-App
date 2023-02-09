import React, { useState } from 'react'
import { ItemCountContainer, ButtonAddToCart, Panel } from './ItemCount.styled';

function ItemCount() {

    // { initial = 1, stock = 10, onAdd }

    const [stock, setStock] = useState(10);
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleOnAdd = () => {
        console.log({count});
    }

    return (
        <ItemCountContainer>
            <Panel>
                <div>
                    <button onClick={handleAdd}> + </button>
                </div>

                <div>
                    <label>{count}</label>
                </div>

                <div>
                    <button onClick={handleSubtract}> - </button>
                </div>
            </Panel>

            <div>
                <ButtonAddToCart onClick={handleOnAdd}> Add to cart </ButtonAddToCart>
            </div>
        </ItemCountContainer>
    )
}

export default ItemCount