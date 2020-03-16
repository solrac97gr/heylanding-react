import styled from "styled-components";
import config from "../../config";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
  padding: 50px;
  margin: 20px;
  border-radius: 6px;
  cursor:pointer;
`;
export const ServiceName = styled.span`
  color: ${config.primary};
  font-size: 2em;
  font-weight: 600;
`;

export const ServiceDescription = styled.span`
  font-size: 1.5em;
  margin-top: 10px;
`;

export const ServicePrice = styled.span`
  color: ${config.primary};
  font-size: 2em;
  font-weight: 600;
`;

export const ServiceInfo = styled.span`
  display: flex;
  flex-direction: column;
`;
