import { useState } from 'react'

import InputCount from "../InputCount/InputCount";
import { ItemCountContainer, ButtonCount1, Panel, CountNumber } from './ItemCount.styled';

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

            <Panel>
                <div>
                    <ButtonCount1 onClick={handleAdd}> + </ButtonCount1>
                </div>

                <div>
                    <CountNumber>{count}</CountNumber>
                </div>

                <div>
                    <ButtonCount1 onClick={handleSubtract}> - </ButtonCount1>
                </div>
            </Panel>

        </ItemCountContainer>
    )
}

export default ItemCount
