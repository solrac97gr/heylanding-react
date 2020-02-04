import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

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
  justify-content: center;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  width: 50%;
  @media (max-width: 500px) {
  width:100%;
}
`;
export const ButtonCTA = styled(LinkRouter)`
  color: white;
  text-decoration: none;
  background-color: #fe8307;
  padding: 20px;
  border-radius: 25px 0px 25px 0px;
  margin: 0px 5px;
  box-shadow: 1.5px 1px 1px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  &:hover {
    background-color: #b35b03;
  }
  @media (max-width: 500px) {
   width:100%;
  }
`;
export const ApplyTitle = styled.h2`
  color: #fe8307;
  margin: 10px;
  font-size:2em;
`;
