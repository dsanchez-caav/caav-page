import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropmenuS = styled.ul`
    width: 10rem;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
    &.Drop-click{
        display: none;
    }

`;

export const Dropitem = styled.li`
    background: #F1F1F1;
    cursor: pointer;
    &:hover{
        transition: all 0.3s ease-out;
        background: #C9EFF2;
    }
    @media screen and (max-width: 960px){
        display: flex;
        width: 100%;
    }
`;

export const Droplink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #262728;
    padding: 16px;
`;

export const DropmenuC = styled.ul`
    width: 10rem;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
    &.Drop-click{
        display: none;
    }

`;

export const DropmenuL = styled.ul`
    width: 8rem;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
    &.Drop-click{
        display: none;
    }
    @media screen and (max-width: 960px){
        display: flex;
        width: 100%;
    }
`;