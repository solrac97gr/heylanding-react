import styled from "styled-components";

export const ListTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 3 3 180px 180px;
  }
  justify-content: center;
  padding:25% 18% 3% 18%;
`;
