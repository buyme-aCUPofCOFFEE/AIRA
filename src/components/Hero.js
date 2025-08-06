import React from 'react';
import styled from 'styled-components';
import heroImage from '../Assets/heroImage1.jpg';
import heroImage1 from '../Assets/heroImage1.1.jpg';
import heroImage2 from '../Assets/heroImage1.2.jpg';
import heroImage3 from '../Assets/heroImage1.3.jpg';
import heroImage4 from '../Assets/heroImage1.4.png';

function Hero() {
  return (
    <HeroWrapper>
      <NavBar />

      {/* Scattered Background Paw & Heart Shapes */}
      {[
        { className: 'paw', top: '10%', left: '5%' },
        { className: 'heart', top: '15%', left: '70%' },
        { className: 'paw', top: '25%', left: '40%' },
        { className: 'heart', top: '30%', left: '85%' },
        { className: 'paw', top: '45%', left: '20%' },
        { className: 'heart', top: '50%', left: '55%' },
        { className: 'paw', top: '65%', left: '75%' },
        { className: 'heart', top: '70%', left: '10%' },
        { className: 'paw', top: '80%', left: '50%' },
        { className: 'heart', top: '85%', left: '30%' },
        { className: 'paw', top: '90%', left: '90%' },
        { className: 'heart', top: '20%', left: '25%' },
      ].map((shape, i) => (
        <BackgroundShape
          key={i}
          className={shape.className}
          style={{ top: shape.top, left: shape.left }}
        />
      ))}

      <HeroContent>
        {/* Left Side Text */}
        <TextContainer>
          <HeroText>
            <h1><span>Hi!</span> I'm Aira</h1>
            <h2>Your Private Babysitter</h2>
            <p>150 - 175 DKK/Hour</p>
            <CTAButton href="#connect">Let's Get Connected</CTAButton>
          </HeroText>
        </TextContainer>

        {/* Right Side Blob */}
        <BlobWrapper>
          <BlobContainer>
            <BlobSVG viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="blobClip">
                  <path
                    d="M146.3,-174.1C183.2,-136.1,194.9,-68,185.7,-10.3C176.4,47.4,146.1,94.9,109.2,139.2C72.3,183.6,28.6,224.9,-19.4,238.2C-67.3,251.4,-119.6,236.6,-160.4,200.4C-201.2,164.2,-230.5,106.6,-236.3,48.7C-242.1,-9.1,-224.4,-67.2,-190.6,-112.1C-156.7,-157.1,-106.7,-189,-50.6,-211.4C5.5,-233.8,110.5,-236.2,146.3,-174.1Z"
                    transform="translate(270 300)"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#blobClip)">
                <image
                  href={heroImage}
                  width="150%"
                  height="150%"
                  preserveAspectRatio="xMidYMid slice"
                  transform="translate(-110, 45) scale(0.65)"
                />
              </g>
            </BlobSVG>

            <EmojiOverlay style={{ top: '145px', left: '100px', fontSize: '7rem' }}>🐹</EmojiOverlay>
          </BlobContainer>

          {/* Decorative Circles with emoji overlays */}
          <DecorativeCircle style={{ top: '-105px', right: '9px' }} image={heroImage1} zoom>
            <EmojiOverlay style={{ top: '45px', left: '104px', fontSize: '3.5rem' }}>🐵</EmojiOverlay>
          </DecorativeCircle>

          <DecorativeCircle style={{ top: '100px', right: '-130px' }} image={heroImage2}>
            <EmojiOverlay style={{ top: '75px', left: '119px', fontSize: '2rem' }}>🐱</EmojiOverlay>
          </DecorativeCircle>

          <DecorativeCircle style={{ top: '490px', right: '35px' }} image={heroImage3}>
            <EmojiOverlay style={{ top: '25px', left: '45px', fontSize: '4.5rem' }}>🐰</EmojiOverlay>
          </DecorativeCircle>

          <DecorativeCircle style={{ top: '340px', right: '-140px' }} image={heroImage4} />
        </BlobWrapper>
      </HeroContent>
    </HeroWrapper>
  );
}

export default Hero;

// ========== STYLES ==========

const HeroWrapper = styled.section`
  background-color: #f5bd1e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 9rem 1rem 4rem;
  overflow: hidden;
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  width: 100%;
  gap: 2rem;
  z-index: 1;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem;
  margin-top: -150px;
  margin-left: 5px;
`;

const HeroText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 5.5rem;
    font-family: 'Pacifico', cursive;
    color: #6a994e;
    margin-bottom: 0.75rem;
  }

  h1 span {
    font-size: 4rem;
    font-weight: bold;
    color: #1b4332;
    font-family: 'Poppins', sans-serif;
  }

  h2 {
    font-size: 2.75rem;
    color: #386641;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.5rem;
    color: #386641;
    margin: 1.25rem 0;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #6a994e;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2.5rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1.25rem;

  &:hover {
    background-color: #386641;
  }
`;

const BlobWrapper = styled.div`
  flex: 1;
  position: relative;
  max-width: 900px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-80px);

  @media (max-width: 768px) {
    transform: none;
  }
`;

const BlobContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
`;

const BlobSVG = styled.svg`
  width: 100%;
  height: auto;
  max-width: 900px;
  aspect-ratio: 1 / 1;
  display: block;

  filter: 
    drop-shadow(0 0 12px rgba(106, 153, 78, 0.8))
    drop-shadow(0 0 20px rgba(106, 153, 78, 0.6));
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: ${props => (props.zoom ? '120%' : '100%')};
  background-position: center;
  background-repeat: no-repeat;

  box-shadow:
    0 0 12px rgba(106, 153, 78, 0.8),
    0 0 20px rgba(106, 153, 78, 0.6);

  z-index: 0;
  overflow: hidden;

  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow:
      0 0 12px rgba(106, 153, 78, 0.7),
      0 0 24px rgba(106, 153, 78, 0.5);
  }
`;

const EmojiOverlay = styled.div`
  position: absolute;
  animation: floatEmoji 2.5s ease-in-out infinite alternate;
  pointer-events: none;

  @keyframes floatEmoji {
    0% {
      transform: translateY(0px) scale(1);
    }
    100% {
      transform: translateY(-6px) scale(1.05);
    }
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  opacity: 0.12;
  z-index: 0;
  pointer-events: none;
  animation: float 16s ease-in-out infinite alternate;

  &.paw::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 30%;
    width: 40%;
    height: 40%;
    background: white;
    border-radius: 50%;
    box-shadow:
      -20px -20px 0 white,
      20px -20px 0 white,
      -10px 10px 0 white,
      10px 10px 0 white;
  }

  &.heart::before,
  &.heart::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 80%;
    background: white;
    border-radius: 50%;
    top: 0;
  }

  &.heart::before {
    left: 0;
    transform: rotate(-45deg);
    transform-origin: bottom right;
  }

  &.heart::after {
    right: 0;
    transform: rotate(45deg);
    transform-origin: bottom left;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

// ======= NAVIGATION BAR =======

const NavBar = () => (
  <NavContainer>
    <NavList>
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#experience">Experience</NavItem>
      <NavItem href="#gallery">Gallery</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </NavList>
  </NavContainer>
);

const NavContainer = styled.nav`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  gap: 5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #40884fff;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #46af5bff;
  }
`;
