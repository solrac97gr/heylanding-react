import styled from "styled-components";
import LogoHorizontal from "../LogoHorizontal";
import { MdArrowBack } from "react-icons/md";
import {Link as LinkRouter} from '@reach/router'


export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0px 18%;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.8);
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 100%;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2px 5px;
    position: fixed;
    top:0;
  }
`;
export const Logo = styled(LogoHorizontal)`
  margin: 0px;
  padding: 0px;
  width: 200px;
`;

export const ArrowBack = styled(MdArrowBack)`
  position:fixed;
  top:8;
  left:0;
`;

export const Img = styled.img`
width:40px;
border-radius:50%;
position:relative;
left:50px;
`
export const LogoFont = styled(LinkRouter)`
font-family:'Pacifico';
font-size:34px;
padding:10px;
color:#7b1fa2;
text-decoration:none;
`