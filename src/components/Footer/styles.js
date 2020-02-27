import styled from "styled-components";
import { Link } from "@reach/router";

export const SitemapItem = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 0.8em;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 10% 10% 10%;
  text-align: left;
  background-color: white;
  color: #7b1fa2;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    padding: 5% 18% 5% 18%;
    justify-content: space-between;
  }
`;

export const FotterTitle = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  @media (min-width: 600px) {
    font-size: 1em;
    font-weight: bold;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const IconSocial = styled.img`
  margin-right: 1.5em;
`;
export const SitemapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
export const ContactFooter = styled.div`
  margin-top: 8px;
`;
export const FooterDerechos = styled.div`
    border-top: 1px solid gainsboro;
    padding-top:1em ;
    padding-bottom:1em ;
    color:#7e7e7e;
    text-align: left;
    padding-left: 18%;
    @media (max-width: 600px) {
      padding-left: 8%;
  }
`
export const IconLinkFooter = styled.div`
margin-top: 13px;

`