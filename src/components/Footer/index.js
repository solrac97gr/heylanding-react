import React from "react";
import {
  FooterContainer,
  SitemapItem,
  FotterTitle,
  SocialContainer,
  IconSocial,
  SitemapContainer,
  ContactFooter,
  FooterDerechos,
  IconLinkFooter
} from "./styles";
import routes from "../../router/index";

export const Footter = () => {
  return (
    <div>
      <FooterContainer>
        <div>
          <FotterTitle>Síguenos</FotterTitle>
          <SocialContainer>
            <a href="https://www.facebook.com/heysolvepe">
              <IconSocial
                src="https://manzanaverde.la/icons/facebook-color.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/company/64602455">
              <IconSocial
                src="https://manzanaverde.la/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/heysolvepe/">
              <IconSocial
                src="https://manzanaverde.la/icons/instagram.svg"
                alt=""
              />
            </a>
          </SocialContainer>
        </div>
        <SitemapContainer>
          <FotterTitle>Enlaces</FotterTitle>
          <SitemapItem to={routes.home}>Inicio</SitemapItem>
          <SitemapItem to={routes.aboutus}>Nosotros</SitemapItem>
          <SitemapItem to={routes.tech}>Técnicos</SitemapItem>
          <SitemapItem to={routes.singin}>Iniciar sesión</SitemapItem>
          <SitemapItem to={routes.singup}>Registrarse</SitemapItem>
        </SitemapContainer>
        <ContactFooter>
          <FotterTitle>Contactanos</FotterTitle>
          <div>Lima-Perú</div>
          <IconLinkFooter>
            <a href="tel:+51939169253">
              <span>+51 939 169 253</span>
            </a>
          </IconLinkFooter>
          <IconLinkFooter>
            <a href="mailto:info@heysolve.com">
              <span>info@heysolve.com</span>
            </a>
          </IconLinkFooter>
        </ContactFooter>
      </FooterContainer>
      <FooterDerechos>
        <span>HeySolve 2020 - Todos los derechos reservados ©</span>
      </FooterDerechos>
    </div>
  );
};
