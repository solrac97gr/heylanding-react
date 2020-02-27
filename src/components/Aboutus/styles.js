import styled from "styled-components";

export const AboutUSContainer = styled.div`
  padding:8% 18% 2% 18%;
  @media (max-width: 500px) {
  padding:0% 5%;
  padding-top:30%;
  text-align:center;
}

`;
export const AboutUsTitle = styled.h2`
  font-size: 2em;
  color: #7b1fa2

;
  margin: 2% 0px;
`;
export const AboutUsContent = styled.span`
  font-size: 1.3em;
  color: black;
  margin: 2% 0px;
  text-align:justify;
`;
export const ObjetiveContainer = styled.div`
display:flex;
flex-direction:column;
`
export const Objetive = styled.span`
  font-size: 1.2em;
  background-color: #7b1fa2
;
  color:white;
  margin: 1% 0px;
  font-weight:600;
  box-shadow:0px 1px 2px rgba(0,0,0,0.3);
  margin:10px 0px;
  padding:13px;
  border-radius:6px;
`
