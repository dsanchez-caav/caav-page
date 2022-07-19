import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainHeader, Button } from '../../globlalStyles';
import { Herosection, HeroText, ButtonWrapper } from './Hero.elements';

const Hero = () => {
  return (
    <Herosection>
      <Container>
        <MainHeader>We have the right Solution</MainHeader>
        <HeroText> Connecting the right solutions to the right needs</HeroText>
        <ButtonWrapper>
          <Link to="/">
            <Button big >
              Learn more
            </Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </Herosection>
  );
};

export default Hero;