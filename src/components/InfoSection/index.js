import React from 'react'
import { Button } from '../ButtonElement'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column2,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ButtonWrap,
  ImgWrap,
  Img
} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, heading, darkText, description, buttonLabel, primary, dark, img, alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{heading} </Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <ButtonWrap>
                  <Button to="home" 
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact={true}
                          offset={-80}
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}>
                            {buttonLabel}
                          </Button>
                </ButtonWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
