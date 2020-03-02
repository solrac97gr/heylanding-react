import styled from "styled-components";

export const ApplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8% 18%;
  background-color:#f4f4f4;
  @media (max-width: 500px) {
  flex-direction:column;
  width:100%;
  padding:8% 5%;
}
`;
export const BenefitContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: left;
  @media (max-width: 500px) {
  width:100%;
}

`;
export const Benefit = styled.li`
  margin: 10px;
  font-weight:500;
  font-size:1.2em;
`;
export const Centered = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  width: 50%;
  @media (max-width: 500px) {
  width:100%;
}
`;
export const ButtonCTA = styled.a`
  color: white;
  text-decoration: none;
  background-color: #7b1fa2;
  padding: 20px;
  border-radius: 25px 0px 25px 0px;
  margin: 0px 5px;
  box-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  &:hover {
    background-color: #681A8A;
  }
  @media (max-width: 500px) {
   width:100%;
  }
`;
export const ApplyTitle = styled.h2`
  color: #7b1fa2;
  margin: 10px;
  font-size:2em;
`;
export const ApplyContent = styled.span`
  margin: 10px;
`;
export const Img = styled.img`
width: 200px;
`