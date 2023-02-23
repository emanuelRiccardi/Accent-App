import React, { useState } from 'react'
import InputCount from "../InputCount/InputCount";
import { ItemCountContainer, ButtonCount1, Panel } from './ItemCount.styled';

function ItemCount({ initial = 1, stock = 10, onAdd }) {

    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const handleSubtract = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

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
                {
                    inputType === 'button' ?
                        <>
                            <ButtonCount1
                                onClick={() => {
                                    onAdd(count)
                                    handleInter()
                                }}
                            >
                                ADD TO CART
                            </ButtonCount1>
                        </>
                            :
                            <InputCount />
                }
                        </div>

        </ItemCountContainer>
    )
}

export default ItemCount
