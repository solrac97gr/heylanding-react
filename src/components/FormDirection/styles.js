import styled from "styled-components";
import config from "../../config";

export const FormDirectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25% 18%;
`;
export const Select = styled.select`
  padding: 20px;
  font-size: 21px;
  width: 30%;
  margin: 20px;
`;

export const Input = styled.input`
  width: 30%;
  margin: 10px;
  padding: 10px 3px;
  border: 1px solid black;
  border-radius: 6px;
  font-size:20px;
`;

export const TextArea = styled.textarea`
  width: 30%;
  border-radius: 6px;
  margin: 10px;
  font-size:20px;
  padding:10px;
`;

export const FormTitle = styled.span`
  font-size: 2em;
  font-weight: 600;
  color: ${config.secondary};
`;

export const Button = styled.button`
  width: 30%;
  background-color: #4267b2;
  color: white;
  font-size: 13px;
  padding: 13px;
  margin: 8px 5px;
  font-weight: 600;
  font-size: 1.5em;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  cursor:pointer;
`;
