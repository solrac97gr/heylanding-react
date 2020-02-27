import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  width: 30%;
  margin: 0px auto;
  margin-top: -20px;
  margin-bottom: 20px;
  border-radius: 6px;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 23%;
    margin-bottom:0;
    position:fixed;
    bottom:0;
    box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0;
  }
`;
export const Input = styled.input`
  width: 70%;
  font-size: 0.8em;
  padding: 4% 1%;
  margin: 3px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  text-align: center;
  color: white;
  font-weight: 600;
  width: 20%;
  padding: 10px;
  background-color: #4267b2;
  border-radius: 0px 6px 6px 0px;
  @media (max-width: 500px) {
    border-radius:0;
  }
`;
