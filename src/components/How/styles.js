import styled from "styled-components";
import AddReq from "../Svgr/addreq";
import Prices from "../Svgr/prices";
import Fun from "../Svgr/fun";
import config from "../../config";

export const AddReqStyled = styled(AddReq)`
  width: 80px;
  margin: auto;
  padding-top: 10px;
`;
export const FunStyled = styled(Fun)`
  width: 80px;
  margin: auto;
  padding-top: 10px;
`;
export const PricesStyled = styled(Prices)`
  width: 65px;
  margin: auto;
  padding-top: 15px;
`;

export const StageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 5% 18px;
  }
`;
export const HowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 5% 18%;
  background: #F2994A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  @media (max-width: 500px) {
    padding: 5% 20px;
  }
`;
export const SectionTitle = styled.h2`
  font-size: 2em;
  color: ${config.hard};
`;
export const Stage = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const StageTitle = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  color: ${config.hard};
  margin: 10px 0px;
`;
export const StageInfo = styled.span`
  color: black;
`;
export const Img = styled.img`
  padding: 20px;
  width: 250px;
`;
