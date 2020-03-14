import styled from "styled-components";
import { scaleU } from "../../styles/animation";
import config from "../../config";
/*import heroimg from "../../static/images/yendo.jpeg";*/


export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 10% 18%;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500px) {
    padding-top: 35%;
    padding-bottom: 20%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  text-align: left;
  vertical-align: middle;
  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;
export const ImgContainer = styled.div`
  text-align: center;
  vertical-align: middle;
  width: 50%;
  color: ${config.primary};
  ${scaleU({ time: "0.7s" })};
  @media (max-width: 500px) {
    width: 0%;
  }
`;
export const SeoTitle = styled.h1`
  font-weight: normal;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 500px) {
    font-size: 1.5rem;
    ${scaleU({ time: "0.5s" })};
  }
`;

export const MktTitle = styled.span`
  color: white;
  font-family: "Pacifico";
  font-weight: 300;
  margin: 5px 0px;
  font-size: 4rem;
  text-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const ButtonCTA = styled.a`
  color: ${config.hard};
  width: 60%;
  text-align: center;
  text-decoration: none;
  background-color: ${config.secondary};
  padding: 13px;
  border-radius: 25px;
  margin: 50px 0px;
  box-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  &:hover {
    background-color: #f2c94c;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 20px 0px;
    ${scaleU({ time: "0.5s" })};
  }
`;
export const Img = styled.img`
  width: 80%;

  @media (max-width: 500px) {
    display: none;
  }
`;
