import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainHeader, Button } from '../../globlalStyles';
import { Herosection, HeroText, ButtonWrapper } from './Hero.elements';
import { useTranslation } from "react-i18next";

const Hero = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <Herosection>
      <Container>
        <MainHeader>{t("hero.title")}</MainHeader>
        <HeroText>{t("hero.text")}</HeroText>
        <ButtonWrapper>
          <Link to="/Services">
            <Button fontBig >
            {t("hero.button")}
            </Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </Herosection>
    
  );
};

export default Hero;