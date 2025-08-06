import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import experienceImage from '../Assets/experience1.jpg';
import exp2 from '../Assets/experience2.png';
import exp3 from '../Assets/experience3.png';
import grass2 from '../Assets/paw.png';

const sharedDescription1 = `I used to be aupair in Netherlands. My host kids are all boys.
3 years old - Twins 5 years old. I pack their lunch box, bring them to school, pick them up, prepare dinner for them and put them to bed.
When they are not in the day care, we normally go to the playgrounds and play.`;

const sharedDescription2 = `I spend time with Jen’s 2 kids and roam them around the tourist attraction nearby the Airbnb they are staying with. We ate ice cream together. After I put them to bed.`;

const sharedDescription3 = `I looked after Rosie’s three children for two nights, allowing her and her husband to relax, explore the city, and enjoy some well-deserved quiet dinners together.`;

const experienceItems = [
  {
    id: 1,
    image: experienceImage,
    text: sharedDescription1,
    emojis: [
      { symbol: '🦊', top: 70, left: 133, fontSize: '2rem', rotate: '10deg' },
      { symbol: '🐼', top: 90, left: 167, fontSize: '2rem', rotate: '10deg' },
      { symbol: '🐻', top: 80, left: 100, fontSize: '2rem', rotate: '10deg' },
    ],
  },
  {
    id: 2,
    image: exp2,
    text: sharedDescription2,
    emojis: [
      { symbol: '🐭', top: 85, left: 115, fontSize: '2rem', rotate: '10deg' },
      { symbol: '🐺', top: 75, left: 150, fontSize: '2.5rem', rotate: '0deg' },
    ],
  },
  {
    id: 3,
    image: exp3,
    text: sharedDescription3,
    emojis: [
      { symbol: '🐨', top: 115, left: 115, fontSize: '2rem', rotate: '10deg' },
      { symbol: '🐸', top: 105, left: 225, fontSize: '2.8rem', rotate: '55deg' },
      { symbol: '🦝', top: 110, left: 150, fontSize: '2rem', rotate: '10deg' },
    ],
  },
];

function Experience() {
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setExpanded(false);
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, []);

  return (
    <Container>
      {/* Background shapes */}
      {[
        { className: 'paw', top: '5%', left: '10%' },
        { className: 'heart', top: '10%', left: '70%' },
        { className: 'paw', top: '20%', left: '45%' },
        { className: 'heart', top: '35%', left: '80%' },
        { className: 'paw', top: '50%', left: '15%' },
        { className: 'heart', top: '60%', left: '60%' },
        { className: 'paw', top: '75%', left: '80%' },
        { className: 'heart', top: '85%', left: '10%' },
        { className: 'paw', top: '90%', left: '50%' },
        { className: 'heart', top: '30%', left: '30%' },
      ].map((shape, i) => (
        <BackgroundShape
          key={i}
          className={shape.className}
          style={{ top: shape.top, left: shape.left }}
        />
      ))}

      {/* Decorative image (upper right paw slanted) */}
      <DecorativeImage src={grass2} top="5%" right="0" width="660px" rotate="2deg" />

      <Title>My Experience</Title>

      <CardWrapper ref={wrapperRef} onMouseEnter={() => setExpanded(true)}>
        {experienceItems.map((item) => (
          <Card key={item.id} expanded={expanded}>
            <ImageBox>
              <StyledImage src={item.image} alt={`Experience ${item.id}`} />
              <EmojiOverlay>
                {item.emojis.map((emoji, idx) => (
                  <span
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: `${emoji.top}px`,
                      left: `${emoji.left}px`,
                      transform: `rotate(${emoji.rotate || '0deg'})`,
                      fontSize: emoji.fontSize || '1.5rem',
                    }}
                  >
                    {emoji.symbol}
                  </span>
                ))}
              </EmojiOverlay>
            </ImageBox>
            <Description show={expanded}>
              {item.text.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </Description>
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
}

export default Experience;

// ---------------- Styled Components ----------------

const Container = styled.section`
  width: 100%;
  background-color: #f5bd1e;
  position: relative;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const DecorativeImage = styled.img`
  position: absolute;
  z-index: 0;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  width: ${({ width }) => width || '120px'};
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate})` : 'none')};

  @media (max-width: 768px) {
    width: ${({ width }) => width || '80px'};
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Pacifico', cursive;
  font-weight: 1200;
  color: #386641;
  text-align: center;
  margin-top: 0rem;
  margin-bottom: 2.5rem;
  z-index: 2;
  text-transform: capitalize; /* ✅ this ensures "My Experience" instead of all caps */
`;

const CardWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
`;

const Card = styled.div`
  width: 313px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const EmojiOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 12px;
  left: 12px;
  pointer-events: none;
  z-index: 2;
`;

const Description = styled.div`
  padding: ${({ show }) => (show ? '1rem' : '0')};
  max-height: ${({ show }) => (show ? '1000px' : '0')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-10px)')};
  overflow: hidden;
  transition:
    max-height 0.5s ease,
    padding 0.5s ease,
    opacity 0.5s ease,
    transform 0.5s ease;
  background: #f7f7f7;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
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
