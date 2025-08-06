import React from 'react';
import styled, { keyframes } from 'styled-components';

// Image imports
import image1 from '../Assets/gal1.jpg';
import image2 from '../Assets/gal2.jpg';
import image3 from '../Assets/gal3.jpg';
import image4 from '../Assets/gal4.jpg';
import image5 from '../Assets/gal5.jpg';
import image6 from '../Assets/gal6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

const Gallery = () => {
  return (
    <Wrapper>
      <Title>My Gallery</Title>

      {/* Yellow Blobs */}
      <BlobTopRight />
      <BlobBottomLeft />
      <BlobTopLeft />
      <BlobBottomRight />

      {/* Green Blobs */}
      <GreenBlobMiddleLeft />
      <GreenBlobMiddleRight />
      <GreenBlobBottomCenter />

      <GalleryContainer>
        <FilmRoll direction="right">
          <Track direction="right">
            {images.concat(images).map((img, i) => (
              <FilmImage key={`top-${i}`} src={img} alt={`Top ${i}`} />
            ))}
          </Track>
        </FilmRoll>

        <FilmRoll direction="left" center>
          <Track direction="left">
            {images.concat(images).map((img, i) => (
              <FilmImage key={`center-${i}`} src={img} alt={`Center ${i}`} />
            ))}
          </Track>
        </FilmRoll>

        <FilmRoll direction="right">
          <Track direction="right">
            {images.concat(images).map((img, i) => (
              <FilmImage key={`bottom-${i}`} src={img} alt={`Bottom ${i}`} />
            ))}
          </Track>
        </FilmRoll>
      </GalleryContainer>
    </Wrapper>
  );
};

export default Gallery;

// Styled Components

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #fffef9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  color: #386641;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0rem;
  z-index: 2;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1;
  width: 100%;
  padding: 4rem 0;
`;

const FilmRoll = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${({ direction }) =>
    direction === 'left' ? scrollLeft : scrollRight} 40s linear infinite;
`;

const FilmImage = styled.img`
  height: 200px;
  width: auto;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;

// Blobs

const BlobTopRight = styled.div`
  position: absolute;
  top: -350px;
  right: -350px;
  width: 800px;
  height: 800px;
  background: rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  filter: blur(200px);
  box-shadow: 0 0 350px 150px rgba(255, 215, 0, 0.3);
  z-index: 0;
`;

const BlobTopLeft = styled.div`
  position: absolute;
  top: 250px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: rgba(255, 215, 0, 0.4);
  border-radius: 50%;
  filter: blur(150px);
  box-shadow: 0 0 250px 120px rgba(255, 215, 0, 0.25);
  z-index: 0;
`;

const BlobBottomRight = styled.div`
  position: absolute;
  bottom: 50px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: rgba(255, 215, 0, 0.4);
  border-radius: 50%;
  filter: blur(150px);
  box-shadow: 0 0 250px 100px rgba(255, 215, 0, 0.25);
  z-index: 0;
`;

const BlobBottomLeft = styled.div`
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 600px;
  height: 600px;
  background: rgba(255, 215, 0, 0.4);
  border-radius: 50%;
  filter: blur(180px);
  box-shadow: 0 0 300px 120px rgba(255, 215, 0, 0.25);
  z-index: 0;
`;

const GreenBlobMiddleLeft = styled.div`
  position: absolute;
  top: 500px;
  left: -150px;
  width: 450px;
  height: 450px;
  background: rgba(10, 240, 18, 0.3);
  border-radius: 50%;
  filter: blur(130px);
  box-shadow: 0 0 220px 110px rgba(7, 243, 15, 0.25);
  z-index: 0;
`;

const GreenBlobMiddleRight = styled.div`
  position: absolute;
  top: 900px;
  right: -180px;
  width: 420px;
  height: 420px;
  background: rgba(8, 243, 16, 0.3);
  border-radius: 50%;
  filter: blur(130px);
  box-shadow: 0 0 210px 100px rgba(9, 240, 17, 0.25);
  z-index: 0;
`;

const GreenBlobBottomCenter = styled.div`
  position: absolute;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: rgba(8, 238, 16, 0.3);
  border-radius: 50%;
  filter: blur(150px);
  box-shadow: 0 0 250px 120px rgba(6, 245, 14, 0.25);
  z-index: 0;
`;
