import styled from "styled-components";

export const TecniciansCardListContainer = styled.div`
  padding: 0% 18%;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    flex: 1 1 220px 220px;
  }
  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 23% 5%;
}
`;
