import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding:2% 18% 2% 18%;
  justify-content: center;
  text-align: center;
  @media (max-width: 500px) {
    padding: 8% 5% 8% 5%;
  }
`;
export const TeamCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TeamCardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
`;
export const TeamTitle = styled.h2`
  font-size: 2em;
  color: #7b1fa2;
  margin: 5% 0px;
`;
export const TeamCardTitle = styled.h3`
  font-size: 0.9em;
  color: #7b1fa2;
  margin-top: 5px;
  font-weight: 500;
`;
export const TeamCardCharge = styled.small`
  color: #7e7e7e;
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  border-top: 1px solid gainsboro;
  padding-top: 8px;
  justify-content: space-around;
  margin-bottom: 10px;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid gainsboro;
  }
`;

export const IconSocial = styled.img``;

export const TeamCard = styled.div`
  @media (max-width: 500px) {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-top:13px;
    padding:13px;
    border-radius:6px;
  }
`;
