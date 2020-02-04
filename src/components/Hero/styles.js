import styled from "styled-components";
import {scaleU} from '../../styles/animation'



export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 150px 18%;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500px) {
    padding-top:50%;
    padding-bottom:20%;
    padding-left:20px;
    padding-right:20px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  width: 50%;
  text-align: left;
  vertical-align: middle;
  @media (max-width: 500px) {
   width:100%;
  }
`;
export const ImgContainer = styled.div`
  text-align: center;
  vertical-align: middle;
  width: 50%;
  color: #0088b3;
  ${scaleU({time:"0.5s"})};
  @media (max-width: 500px) {
   width:0%;
  }
`;
export const SeoTitle = styled.h1`
  font-weight: normal;
  font-size: 1.5rem;
  color: black;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  
`;
export const MktTitle = styled.span`
  color: #b35b03;
  font-weight: 600;
  margin: 5px 0px;
  font-size: 3.1rem;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const ButtonCTA = styled.a`
  color: white;
  width: 40%;
  text-align: center;
  text-decoration: none;
  background-color: #fe8307;
  padding: 13px;
  border-radius: 25px;
  margin: 50px 0px;
  box-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  &:hover {
    background-color: #b35b03;
    
  }
  @media (max-width: 500px) {
    width:100%;
    margin:20px 0px;
  }
`;
export const Img = styled.img`
  width: 500px;
  @media (max-width: 500px) {
    display: none;
  }
`;
