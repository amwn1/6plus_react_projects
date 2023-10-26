import React from 'react';
import styled from 'styled-components';
import Video from '../../videos/video.mp4';
 export const HeroSection = () => {
  return (
    <HeroContainer>
    <HeroBg>
        < VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>
    </HeroBg>
    <HeroContent>
      <HeroH1>Virtual Banking made easy</HeroH1>
      <Herop>
        Sign up for a new account today and recieve $250 in credits towards your next payement.
      </Herop>
      <HeroBtnWrapper>
        <Button to="signup">
          Get Started {hover?<ArrowForward/>:<ArrowRight/>}1
        </Button>
      </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding : 0 30px ;
    height: 800px;
    position: relative;
    z-index:1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
object-fit: cover;

`

export const HeroContent = styled.div`
z-index:3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 = styled.h1`
color: #fff;
font-size : 48px;
text-align: center;

@media screen and (max-width : 768px){
  font-size: 40px;
}
@media screen and (max-width : 480px){
  font-size: 32px;
}

`
export const Herop = styled.p`
margin-top: 24px;
color:#fff;
font-size:24px;
text-align: center;
max-width: 600px;

`
export const HeroBtnWrapper = styled.div``
export const Button = styled.button``
export const ArrowForward = styled.button``
export const ArrowRight = styled.button``

