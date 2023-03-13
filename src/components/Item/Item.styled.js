import styled from "styled-components";


export const ItemContainer = styled.div`
    display: flex;
    position: relative;
    width: 350px;
    align-items: flex-start;
    gap: 10px;
    padding: 20px 45px;
    margin: 65px 25px 30px 25px;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    gap: 17px;
    position: relative;
`;

export const ItemImg = styled.img`
    min-width: 260px;
    height: 244px;
`;

export const ItemDescriptiveText = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
`;

export const Title = styled.h1`
    color: #5A8B77;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    width: fit-content;
    margin-top: -1px;
    margin-bottom: -5px;
    letter-spacing: 0;
    line-height: normal;
`;

export const Description = styled.h3`
    color: #5A8B77;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    width: fit-content;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
`;

export const Button = styled.button`
    display: flex;
    width: fit-content;
    align-items: flex-start;
    gap: 10px;
    padding: 13px 21px;
    border-radius: 2px;
    border: 2px solid;
    border-color: #5A8B77;
    font-weight: 600px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #5A8B77;
    background-color: #FFFAE5;
`;

export const ItemPrice = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    position: absolute;
    top: -35px;
    left: 45px;
`;

export const Ellipse = styled.div`
    min-width: 90px;
    height: 90px;
    background-color: #FACA7B;
    border-radius: 45px;
`;

export const Price = styled.div`
    color: #5A8B77;
    font-weight: 700;
    font-family: "Poppins" , sans-serif;
    font-size: 24px;
    position: absolute;
    top: 27px;
    left: 18px;
    letter-spacing: 0;
    line-height: normal;
`;
