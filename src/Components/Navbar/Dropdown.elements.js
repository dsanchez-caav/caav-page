import styled from "styled-components";
import { Container } from "../../globlalStyles";
import { Link } from "react-router-dom";

export const Dropmenu = styled.ul`
    width: 10rem;
    position: absolute;
    list-style: none;
    text-align: start;

`;

export const Dropitem = styled.li`
    background: #F1F1F1;
    cursor: pointer;

`;

export const Droplink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #262728;
    padding: 16px;
`;