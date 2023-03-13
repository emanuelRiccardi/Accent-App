import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: flex;
    width: auto;
    margin-top: 50px;
    height: 270px;
    align-items: center;
    justify-content: center;
    gap: 89px;
    padding: 40px;
    top: 0;
    left: 0;
    background-color: #FFFAE5;
    border-top: 5px solid #5A8B77;
    border-bottom: 5px solid #5A8B77;
`;

export const CartImg = styled.img`
    position: relative;
    min-width: 200px;
    height: 177px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 193px;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    flex: 1;
`;

export const InfoTop = styled.div`
    color: #5A8B77;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    align-self: stretch;
`;

export const InfoBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    align-self: stretch;
`;

export const ProdQuantity = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    color: #5A8B77;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
`;