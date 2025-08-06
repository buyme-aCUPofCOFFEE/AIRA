import React from 'react';
import styled from 'styled-components';

const referencesData = {
  Netherlands: [
    {
      name: 'Donna',
      phone: '+31 6 84877418',
      children: ['1 year old boy', '4 years old girl'],
    },
    {
      name: 'Mr & Mrs Pool',
      phone: '+31 6 26799881 / +31 6 52637676',
      children: ['5 years old boy', '3 years old (twins) boys'],
    },
    {
      name: 'Patricia',
      phone: '+31 6 84877418',
      children: ['2 years old girl'],
    },
  ],
  Denmark: [
    {
      name: 'Rosie',
      phone: '+44 7736 280169',
      children: ['3 years old boy', '7 years old boy', '10 years old girl'],
    },
    {
      name: 'Karita',
      phone: '+45 28 10 92 24',
      children: ['9 months old girl'],
    },
    {
      name: 'Lisa',
      phone: '+45 24 63 63 03',
      children: ['1 year old boy'],
    },
  ],
};

// ...same imports

const References = () => {
  const backgroundShapes = [
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
  ];

  return (
    <ReferencesWrapper>
      {backgroundShapes.map((shape, i) => (
        <BackgroundShape
          key={i}
          className={shape.className}
          style={{ top: shape.top, left: shape.left }}
        />
      ))}

      <Header>
        <h1>Reference</h1>
        <p>For verification, don’t hesitate to reach out to my former employers via WhatsApp.</p>
      </Header>

      <RowWrapper>
        <CountryBlock>
          <CountryContainer>
            <CountryLabel>NETHERLANDS</CountryLabel>
            <CardRow>
              {referencesData.Netherlands.map((ref, index) => (
                <RefCard key={index}>
                  <h3>{ref.name}</h3>
                  <p>{ref.phone}</p>
                  <ul>
                    {ref.children.map((child, i) => (
                      <li key={i}>{child}</li>
                    ))}
                  </ul>
                </RefCard>
              ))}
            </CardRow>
          </CountryContainer>
        </CountryBlock>

        <CountryBlock>
          <CountryContainer>
            <CountryLabel>DENMARK</CountryLabel>
            <CardRow>
              {referencesData.Denmark.map((ref, index) => (
                <RefCard key={index}>
                  <h3>{ref.name}</h3>
                  <p>{ref.phone}</p>
                  <ul>
                    {ref.children.map((child, i) => (
                      <li key={i}>{child}</li>
                    ))}
                  </ul>
                </RefCard>
              ))}
            </CardRow>
          </CountryContainer>
        </CountryBlock>
      </RowWrapper>
    </ReferencesWrapper>
  );
};

export default References;

// ========== STYLES ==========

const ReferencesWrapper = styled.section`
  background-color: #f5bd1e;
  padding: 2rem 1rem 3rem;
  font-family: 'Poppins', sans-serif;
  color: #1b4332;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
  z-index: 1;
  position: relative;

  h1 {
    font-family: 'Pacifico', cursive;
    font-size: 3rem;
    color: #386641;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #f5f5f5ff;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  z-index: 1;
  position: relative;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CountryBlock = styled.div`
  flex: 1;
  min-width: 350px;
  max-width: 700px;
  display: flex;
  justify-content: center;
`;

const CountryContainer = styled.div`
  border: 2px solid #2d6a4f;
  border-radius: 1.5rem;
  padding: 1rem;
  background: rgba(138, 202, 183, 0.3); // more transparent
  backdrop-filter: blur(10px);          // frosted-glass effect
  -webkit-backdrop-filter: blur(10px);  // Safari support
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
`;

const CountryLabel = styled.h2`
  background-color: #2d6a4f;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;     // cards in a row
  justify-content: center;
  flex-wrap: wrap;         // wrap on small screens
  gap: 1.5rem;
`;

const RefCard = styled.div`
  background-color: #ffffffdd;
  border-radius: 1rem;
  padding: 1rem;
  width: 150px;
  min-height: 100px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-size: 1rem;
    color: #6a994e;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.95rem;
    color: #1b4332;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: disc;
    padding-left: 1rem;

    li {
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
      color: #333;
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
