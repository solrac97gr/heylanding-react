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
`;
export const Input = styled.input`
  width: 70%;
  font-size:.8em;
  padding: 4% 1%;
  margin: 3px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
text-align:center;
color:white;
font-weight:600;
  width: 20%;
  padding: 10px;
  background-color: #B35B03;
  border-radius: 0px 6px 6px 0px;
`;
