import styled from 'styled-components'
import config from "../../config"


export const WebAppContainer = styled.div`
padding:8% 18%;
display:flex;
flex-direction:row;
@media (max-width: 500px) {
  flex-direction: column;
  padding:8% 5%;
  justify-content:center;
}
`
export const Img = styled.img`
width:53%;
box-shadow:0px 2px 4px rgba(0,0,0,0.5);
border-radius:20px;
@media (max-width: 500px) {
  margin-top:20px;
  width:100%;
  
}
`
export const ImgContainer = styled.div`
width:50%;
display:flex;
justify-content:center;
@media (max-width: 500px) {
  width:100%;
  display:none;
}
`
export const TextContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;
@media (max-width: 500px) {
  width:100%;
}
`
export const WebAppTitle = styled.h2`
color: #7b1fa2;
font-size:2em;
margin-bottom:20px;
`
export const Description = styled.span`
font-size:21px;
`
export const ButtonCTA  = styled.a`
color:white;
text-decoration:none;
text-align:center;
width:30%;
background-color:${config.secondary};
padding:13px;
border-radius:25px;
margin:10px 0px;
box-shadow:1.5px 1px 1px rgba(0,0,0,0.2);
font-weight:500;
&:hover{
    background-color:#681A8A;
}
@media (max-width: 500px) {
  width:100%;
  margin-bottom:10px;
}

`
export const StageContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: left;
  @media (max-width: 500px) {
  width:100%;
}

`;
export const Stage = styled.li`
  margin: 10px 0px;
  font-weight:600;
  font-size:1.2em;
  color: #7b1fa2;
`;