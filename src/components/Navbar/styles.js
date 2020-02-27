import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import LogoHorizontal from "../LogoHorizontal";
import { fadeIn,scaleU } from "../../styles/animation";

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
export const Link = styled(LinkRouter)`
  color: #7e7e7e;
  font-weight: 500;
  text-decoration: none;
  margin: 0px 8px;
  padding: 5px 0px;
  &[aria-current="page"] {
    color: #7b1fa2;
    border-bottom: 3px solid #7b1fa2;
    ${fadeIn({ time: "0.3s" })};
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;
export const ButtonCTA = styled(LinkRouter)`
  color: white;
  text-decoration: none;
  background-color: #7b1fa2;
  padding: 13px;
  border-radius: 25px;
  margin: 0px 5px;
  box-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  &:hover {
    background-color: #681A8A;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Logo = styled(LogoHorizontal)`
  margin: 0px;
  padding: 10px;
  width: 150px;
`;

export const NavElements = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
export const NavElementsMovil = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction:column;
    position:fixed;
    bottom: 10%;
    right:3%;
    background-color:white;
    padding:13px;
    border-radius:6px;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
    ${scaleU({time:"0.4s"})};
  }
`;
export const Img = styled.img`
width:20px;
border-radius:50%;

`
export const Button = styled.button`
  color: #7e7e7e;
  font-weight: 500;
  font-size:15px;
  text-decoration: none;
  margin: 0px 8px;
  padding: 5px 0px;
  &[aria-current="page"] {
    color: #7b1fa2;
    border-bottom: 3px solid #7b1fa2;
    ${fadeIn({ time: "0.3s" })};
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;


export const LogoFont = styled(LinkRouter)`
font-family:'Pacifico';
font-size:34px;
padding:10px;
color:#7b1fa2;
text-decoration:none;
`