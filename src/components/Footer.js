import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted!"); // Replace with actual submission logic or API
  };

  return (
    <Wrapper>
      <BlobTopRight />
      <BlobBottomLeft />
      <GreenBlobTopLeft />
      <GreenBlobBottomRight />
      <YellowBlobCenterLeft />
      <YellowBlobCenterRight />

      <FooterContainer>
        <Title>Get In Touch</Title>

        <ContactBox>
          <LeftColumn>
            <h2>Let’s Connect</h2>
            <p>
              Feel free to reach out to me anytime through WhatsApp or email. I'd be happy to chat and answer any questions!
            </p>

            <InfoBox>
              <Icon>📧</Icon>
              <Text><a href="mailto:aira.le929@gmail.com">aira.le929@gmail.com</a></Text>
            </InfoBox>
            <InfoBox>
              <Icon>📞</Icon>
              <Text><a href="tel:+639121655727">+639121655727</a></Text>
            </InfoBox>
            <InfoBox>
              <Icon>📍</Icon>
              <Text>Copenhagen Denmark</Text>
            </InfoBox>
          </LeftColumn>

          <RightColumn>
            <h2>Send a Message</h2>
            <Form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your full name" required />
              <input type="email" placeholder="your.email@example.com" required />
              <textarea placeholder="Type your message here or just say hello!" required />
              <button type="submit">
                <i className="fas fa-paper-plane" /> Send Message
              </button>
            </Form>
          </RightColumn>
        </ContactBox>

        <FooterBottom>
          <LeftText>
            <strong>Aira Ledesma</strong><br />
            I am a degree holder, curious and creative individual with a passion for learning, solving problems, and making meaningful connections.
          </LeftText>
          <QuickLinks>
  <h3>Quick Links</h3>
  <div>
    <div>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
    </div>
    <div>
      <a href="#contact">Contact</a>
      <a href="/cv.pdf" download>CV</a>
    </div>
  </div>
</QuickLinks>
        </FooterBottom>

        <Copyright>
          © 2025 Aira Ledesma. Made with love and lots of ☕
          <BackToTop onClick={scrollToTop}>⬆ Back to Top</BackToTop>
        </Copyright>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

// Styled Components

const Wrapper = styled.div`
  position: relative;
  background: #fffef9;
  padding: 4rem 2rem 4rem;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color:#508d4bff;
  margin-top: 0rem;
  margin-bottom: 3rem;
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid #508d4bff;
  gap: 2rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 280px;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    color: #333;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const Text = styled.span`
  font-size: 1rem;
`;

const Socials = styled.div`
  margin-top: 2rem;

  span {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

  i {
    cursor: pointer;
    color: #333;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 280px;

  h2 {
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    padding: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  textarea {
    min-height: 100px;
  }

  button {
    background: #508d4bff;
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;

    i {
      margin-right: 0.5rem;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

const LeftText = styled.div`
  max-width: 500px;
  font-size: 1rem;
  color: #333;
`;

const QuickLinks = styled.div`
  h3 {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 3rem;

    a {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      text-decoration: none;

      &:hover {
        color: #4ab909ff;
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 6rem;
  font-size: 0.9rem;
  color: #555;
`;

const BackToTop = styled.button`
  display: block;
  margin: 1rem auto 0;
  background: #6a994e;
  color: #ffff;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
`;

// Enlarged & Added Blobs (Green & Yellow)
const BlobTopRight = styled.div`
  position: absolute;
  top: -400px;
  right: -400px;
  width: 1000px;
  height: 1000px;
  background: rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  filter: blur(250px);
  z-index: 0;
`;

const BlobBottomLeft = styled.div`
  position: absolute;
  bottom: -250px;
  left: -250px;
  width: 900px;
  height: 900px;
  background: rgba(255, 215, 0, 0.4);
  border-radius: 50%;
  filter: blur(230px);
  z-index: 0;
`;

const GreenBlobTopLeft = styled.div`
  position: absolute;
  top: -300px;
  left: -300px;
  width: 900px;
  height: 900px;
  background: rgba(34, 197, 94, 0.3); /* bright green */
  border-radius: 50%;
  filter: blur(200px);
  z-index: 0;
`;

const GreenBlobBottomRight = styled.div`
  position: absolute;
  bottom: -300px;
  right: -300px;
  width: 850px;
  height: 850px;
  background: rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  filter: blur(200px);
  z-index: 0;
`;

const YellowBlobCenterLeft = styled.div`
  position: absolute;
  top: 50%;
  left: -200px;
  width: 800px;
  height: 800px;
  background: rgba(255, 230, 0, 0.25);
  border-radius: 50%;
  filter: blur(180px);
  transform: translateY(-50%);
  z-index: 0;
`;

const YellowBlobCenterRight = styled.div`
  position: absolute;
  top: 50%;
  right: -200px;
  width: 800px;
  height: 800px;
  background: rgba(255, 230, 0, 0.25);
  border-radius: 50%;
  filter: blur(180px);
  transform: translateY(-50%);
  z-index: 0;
`;
