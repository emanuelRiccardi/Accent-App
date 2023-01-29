import styled, { css } from "styled-components";
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const IconDiv = styled.div`
    min-width: 44px;
    height: 44px;
`;

export const ShoppingCart = styled(AiOutlineShoppingCart)`
    height: 30px;
    width: 30px;
    color: black;
`;

export const NotificationIcon = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    color: white;
    background-color: red;
    border-radius: 50%;
    font-size: 12px;
    position: absolute;
    text-align: center;
    line-height: 17px;
`;