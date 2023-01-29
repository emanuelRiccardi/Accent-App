import styled, {css} from "styled-components";
import './NavBar.css'

export const Poppins18px = css`
    color: black;
    font-family: font-family-poppins;
    font-size: font-size-m;
    font-weight: 500;
    font-style: normal;
`;

// Navbar.styled.jsx

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95px;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 20px;
    background-color: #fffae5;
`;

export const Sections = styled.div`
    display: flex;
    height: 79px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    align-self: stretch;
`;

export const Logo = styled.div`
    display: flex;
    min-width: 129px;
    margin-right: 50px;
    width: auto;
`;

export const LogoText = styled.h1`
    flex: 1;
    width: auto;
    font-family: font-family-newsreader;
    font-weight: 800;
    font-style: italic;
    color: black;
    letter-spacing: 0;
    line-height: normal;
`;

export const Items = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 100px;
    padding: 8px 24px;
`;

export const Itemdiv = styled.div`
    display: flex;
    width: fit-content;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
`;

export const Item = styled.div`
    ${Poppins18px}
    width: fit-content;
    margin-top: -1px;
    letter-spacing: 0;
    line-height: normal;
`;