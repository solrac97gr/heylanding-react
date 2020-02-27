import React from "react";
import {
  TeamContainer,
  SocialContainer,
  IconSocial,
  TeamCardContainer,
  TeamCardImage,
  TeamCardCharge,
  TeamTitle,
  TeamCardTitle,
  TeamCard
} from "./styles";

export const Team = () => {
  return (
    <TeamContainer>
      <TeamTitle>Nuestro Equipo.</TeamTitle>
      <TeamCardContainer>
        <TeamCard>
          <TeamCardImage
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHEOAJ0R3ukyQ/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=bhZk4bQ30JYqbAoK1n3SQqEYehA35ve43MEBbnG-snE"
            alt=""
          />
          <TeamCardTitle>Carlos Alberto García rosales</TeamCardTitle>
          <TeamCardCharge>Chief Technology Officer</TeamCardCharge>
          <SocialContainer>
            <a href="https://www.facebook.com/Carlos97gr/">
              <IconSocial
                src="https://manzanaverde.la/icons/facebook-color.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/carlos97gr/">
              <IconSocial
                src="https://manzanaverde.la/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/carlosgrowth.online/">
              <IconSocial
                src="https://manzanaverde.la/icons/instagram.svg"
                alt=""
              />
            </a>
          </SocialContainer>
        </TeamCard>
        <TeamCard>
          <TeamCardImage
            src="https://scontent.flim2-1.fna.fbcdn.net/v/t1.0-9/54356018_2038513879782842_6617078696438136832_o.jpg?_nc_cat=101&_nc_ohc=yNqNDsCQEhMAX_QLPJD&_nc_ht=scontent.flim2-1.fna&oh=72e12623dc84665e82c75ca4a831212e&oe=5EDA68D4"
            alt=""
          />
          <TeamCardTitle>Cesar Alfredo Muñoz Valderrama</TeamCardTitle>
          <TeamCardCharge>Chief Marketing Officer</TeamCardCharge>
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
        </TeamCard>{" "}
        <TeamCard>
          <TeamCardImage
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHWSPjwNEne_w/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=FwdKlyMiyLjvl9oG_0foj722cUa7VggnGtphK58T2Z4"
            alt=""
          />
          <TeamCardTitle>Josue Miguel Machare Valle</TeamCardTitle>
          <TeamCardCharge>Chief Excecutive Officer</TeamCardCharge>
          <SocialContainer>
            <a href="https://www.facebook.com/jmacharevalle">
              <IconSocial
                src="https://manzanaverde.la/icons/facebook-color.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/josué-macharé-valle-a42a83151/">
              <IconSocial
                src="https://manzanaverde.la/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/jmacharev/">
              <IconSocial
                src="https://manzanaverde.la/icons/instagram.svg"
                alt=""
              />
            </a>
          </SocialContainer>
        </TeamCard>
        <TeamCard>
          <TeamCardImage
            src="https://scontent.flim2-1.fna.fbcdn.net/v/t31.0-8/21587239_1471314762963530_934452769389889544_o.jpg?_nc_cat=103&_nc_ohc=CJsdlCs7ZIkAX9r2W1l&_nc_ht=scontent.flim2-1.fna&oh=0c25ecfa125cb0e74a6a0157fd6deea2&oe=5E90C393"
            alt=""
          />
          <TeamCardTitle>Rodrigo Fernando Aliaga Gutierrez</TeamCardTitle>
          <TeamCardCharge>Chief Operating Officer</TeamCardCharge>
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
        </TeamCard>
        <TeamCard>
          <TeamCardImage
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHDHLtH1NymtA/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=oo506bD13tmNYDnOlGVBwF3hGOJoD8nZn1TNb7yUjtM"
            alt=""
          />
          <TeamCardTitle>Heidi Francesska Europa Camus Puente</TeamCardTitle>
          <TeamCardCharge>Chief Comunication Officer</TeamCardCharge>
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
        </TeamCard>
      </TeamCardContainer>
    </TeamContainer>
  );
};
