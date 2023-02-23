import styled from "styled-components";

export const Detail = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    gap: 40px;
    background-color: #5A8B77;
    margin-left: 50px;
    margin-right: 50px;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 10px;
    /* padding: 33px 79px; */
    width: 500px;
    height: 400px;
    position: relative;
    background-color: #4A7262;
`;

export const Img = styled.img`
    position: relative;
    width: 350px;
    height: auto;
`;

export const Elements = styled.div`
    display: flex;
    flex-direction: column;
    height: 306px;
    align-items: flex-start;
    justify-content: center;
    gap: 14px;
    position: relative;
    flex: 1;
`;

export const Title = styled.h1`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #FFFAE5;
    font-size: 40px;
    letter-spacing: 0;
    line-height: normal;
`;

export const Category = styled.h2`
    position: relative;
    width: fit-content;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    color: #FFFAE5;
    font-size: 24px;
    letter-spacing: 0;
    line-height: normal;
`;

export const Description = styled.p`
    position: relative;
    color: #FFFAE5;
    width: 100%;
    height: auto;
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
    border-color: #FFFAE5;
    background-color: #5A8B77;
    font-weight: 600px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #FFFAE5;
`;

export const PriceTag = styled.div`
    position: absolute;
    top: 6px;
    right: 0px;
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #FACA7B;
`;

export const Price = styled.div`
    color: #5A8B77;
    font-weight: 700;
    font-family: "Poppins" , sans-serif;
    font-size: 24px;
    margin-top: 8px;
    width: 54px;
    height: 36px;
    margin-left: 30px;
    position: relative;
    letter-spacing: 0;
    line-height: normal;
`;

