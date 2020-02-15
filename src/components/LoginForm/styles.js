import styled, { css } from "styled-components";
import {scaleU} from "../../styles/animation"

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5%;
  @media (max-width: 500px) {
   width:100%;
   padding: 0%;
  }
`;
export const FormContainer = styled.div`
  padding: 8% 18%;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
   width:100%;
   padding: 30% 5%;
  }
`;

export const Input = styled.input`
  margin: 8px 5px;
  padding:13px 3px;
  border:1px solid  #fe8307;
  border-radius:6px;

`;

export const Button = styled.button`
  background-color: #fe8307;
  color: white;
  font-size:13px;
  padding: 13px;
  margin: 8px 5px;
  font-weight: 600;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  ${(props) =>
    props.social &&
    css`
        display:flex;
        justify-content:space-evenly;
      width: 50%;
      margin: 8px 5px;
    `}
    ${(props) =>
      props.facebook &&
      css`
        background: #2a4468;
        width: 50%;
        margin: 8px 5px;
      `}
    ${(props) =>
      props.google &&
      css`
        background: white;
        color: #606060;
        width: 50%;
        margin: 8px 5px;
        border: 1px solid #fe8307;
      `}
`;
export const FormTitle = styled.h2`
color: #fe8307;
margin:8px 5px;
`;
export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGuide = styled.span`
margin:3px 5px;
font-weight:600;
color:#606060;
`
export const Img = styled.img`
  width: 100%;
  margin:auto;
 
`;
export const ImgContainer = styled.div`
  width: 50%;
  text-align: center;
  vertical-align:middle;
  margin:auto;
  ${scaleU};
  @media (max-width: 500px) {
   display:none;
  }
`;
