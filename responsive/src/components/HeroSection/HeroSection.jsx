import React from 'react';
import styled from 'styled-components';
import Video from '../../videos/video.mp4';
 export const HeroSection = () => {
  return (
    <HeroContainer>
    <HeroBg>
        < VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>

        
    </HeroBg>
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