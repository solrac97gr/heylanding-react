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
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHEOAJ0R3ukyQ/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=Mz3kJN99WCR-1v7eMbe9qKpnPLPJJqU9y3MOAcXM2OE"
            alt=""
          />
          <TeamCardTitle>Carlos Alberto García Rosales</TeamCardTitle>
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
            src="https://media-exp1.licdn.com/dms/image/C5603AQEdk8_qtaZ3OQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=4C-HXRevElZY8JbJPHKrh9VLwaz_RlGw7UTcrvptVn0"
            alt="César Alfredo Muñoz Valderrama"
          />
          <TeamCardTitle>César Alfredo Muñoz Valderrama</TeamCardTitle>
          <TeamCardCharge>Chief Marketing Officer</TeamCardCharge>
          <SocialContainer>
            <a href="https://www.facebook.com/profile.php?id=100008727498663">
              <IconSocial
                src="https://manzanaverde.la/icons/facebook-color.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/césar-alfredo-muñoz-valderrama-109800154/">
              <IconSocial
                src="https://manzanaverde.la/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/caesar.a_mv/">
              <IconSocial
                src="https://manzanaverde.la/icons/instagram.svg"
                alt=""
              />
            </a>
          </SocialContainer>
        </TeamCard>{" "}
        <TeamCard>
          <TeamCardImage
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGIALWGujZvLQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=-JzDZXjSWJ9aE_Fa34q_wn8DnBngVgZfaeOQEP7bMXY"
            alt="Josué Miguel Macharé Valle"
          />
          <TeamCardTitle>Josué Miguel Macharé Valle</TeamCardTitle>
          <TeamCardCharge>Chief Executive Officer</TeamCardCharge>
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
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHWnwAm-NwEVg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=NMcFfYGmReUF_dXbvQfY5pnQTsyGg48OMVAT81srbes"
            alt="Rodrigo Fernando Aliaga Gutierrez"
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
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHDHLtH1NymtA/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=WHFuD4eVCOKtIX0UOfJM71FSZGMPCvnF6LqBj6-1U7w"
            alt="Heidi Francesska Europa Camus Puente"
          />
          <TeamCardTitle>Heidi Francesska Europa Camus Puente</TeamCardTitle>
          <TeamCardCharge>Chief Communication Officer</TeamCardCharge>
          <SocialContainer>
            <a href="https://www.facebook.com/heidifrancesskaeuropa.camuspuente">
              <IconSocial
                src="https://manzanaverde.la/icons/facebook-color.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/heidi-camus-90688616a/">
              <IconSocial
                src="https://manzanaverde.la/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/heidi_camus/">
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
