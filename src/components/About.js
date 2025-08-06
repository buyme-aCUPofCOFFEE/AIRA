import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import aboutImage from '../Assets/aiai.jpg';
import cvFile from '../Assets/Aira_CV.pdf';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }
`;

function About() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Blobs */}
        <BlobTopRight />
        <BlobBottomLeft />
        <GreenBlobTopLeft />
        <GreenBlobBottomRight />
        <YellowBlobCenterLeft />
        <YellowBlobCenterRight />

        <Wrapper>
          <ImageContainer>
            <StyledImage src={aboutImage} alt="Aira with kids" />
          </ImageContainer>

          <TextContainer>
            <Title>About Me</Title>
            <Description>
              I'm a reliable babysitter with experience caring for children from newborns to 10 years old.
              I hold a Degree, have completed a First Aid Course, and bring patience, energy, and a love
              for working with kids.
            </Description>

            <LanguageInfo>
              <strong>Languages:</strong> English (C2), German (A1), Filipino (Native)
            </LanguageInfo>

            <CVButton href={cvFile} download>
              📄 Download CV
            </CVButton>
          </TextContainer>
        </Wrapper>
      </Container>
    </>
  );
}

export default About;

// ----------------- STYLES -----------------

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #fffef9;
  padding: 5rem 1rem 3rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 2px 12px 25px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  color: green;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #508d4bff;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
`;

const LanguageInfo = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;
  color: #2e5e1a;
`;

const CVButton = styled.a`
  display: inline-block;
  width: fit-content;
  margin-top: 1.5rem;
  background-color: #7bb661;
  color: white;
  padding: 0.65rem 0.6rem;
  font-size: 1.2rem;
  border-radius: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 0 15px rgba(255, 223, 0, 0.6);
  transition: background 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #69a958;
    box-shadow: 0 0 25px rgba(255, 223, 0, 0.9);
  }
`;

const ImageContainer = styled.div`
  max-width: 400px;
  width: 100%;
  z-index: 1;
`;

// ----- Blobs (scaled to prevent overflow) -----

const BlobTopRight = styled.div`
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  background: rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  filter: blur(150px);
  z-index: 0;
`;

const BlobBottomLeft = styled.div`
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: rgba(255, 215, 0, 0.4);
  border-radius: 50%;
  filter: blur(150px);
  z-index: 0;
`;

const GreenBlobTopLeft = styled.div`
  position: absolute;
  top: -180px;
  left: -180px;
  width: 550px;
  height: 550px;
  background: rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  filter: blur(140px);
  z-index: 0;
`;

const GreenBlobBottomRight = styled.div`
  position: absolute;
  bottom: -180px;
  right: -180px;
  width: 550px;
  height: 550px;
  background: rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  filter: blur(140px);
  z-index: 0;
`;

const YellowBlobCenterLeft = styled.div`
  position: absolute;
  top: 50%;
  left: -100px;
  width: 450px;
  height: 450px;
  background: rgba(255, 230, 0, 0.25);
  border-radius: 50%;
  filter: blur(130px);
  transform: translateY(-50%);
  z-index: 0;
`;

const YellowBlobCenterRight = styled.div`
  position: absolute;
  top: 50%;
  right: -100px;
  width: 450px;
  height: 450px;
  background: rgba(255, 230, 0, 0.25);
  border-radius: 50%;
  filter: blur(130px);
  transform: translateY(-50%);
  z-index: 0;
`;
