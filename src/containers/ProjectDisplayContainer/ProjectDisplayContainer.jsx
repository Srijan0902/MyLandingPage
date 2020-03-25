import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import ScrollAnimation from 'react-animate-on-scroll';
import { ProjectDisplayCard } from '@components';
import 'animate.css/animate.min.css';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onConnectClicked } from '@utils/commonUtils';
import IoTImage from '@components/Images/ProjectImages/IoTImage';
import VentureUIImage from '@components/Images/ProjectImages/VentureUIImage';
import LandingPageImage from '@components/Images/ProjectImages/LandingPageImage';
import OtherFiddlesImage from '@components/Images/ProjectImages/OtherFiddlesImage';
import UdemyImage from '@components/Images/ProjectImages/UdemyImage';
import ZentorsUIImage from '@components/Images/ProjectImages/ZentorsUIImage';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledFooterText = styled.div`
  position: absolute;
  color: #cc70ab;
  font-family: 'Great Vibes';
  left: 37.5%;
  top: 15%;
  font-size: 2.5rem;
`;

const StyledProjectsDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4c4659;
`;

const ProjectDisplayCardsDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 12vw;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
  grid-column-gap: 4vw;
  grid-row-gap: 5vh;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 47%;
  top: 77.5%;
`;

const ImgDescriptionDiv = styled.div`
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s ease;
`;

class ProjectDisplayContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledProjectsDiv>
          <StyledFooterText>
            <ScrollAnimation delay={250} duration={0.5} animateIn="rotateIn">
              Coming Soon
            </ScrollAnimation>
          </StyledFooterText>
          <ProjectDisplayCardsDiv>
            <ScrollAnimation
              delay={300}
              duration={0.5}
              animateIn="fadeInLeftBig"
            >
              <ProjectDisplayCard projectTitle="IoT Vulnerability Scanner">
                <IoTImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              delay={350}
              duration={0.5}
              animateIn="fadeInRightBig"
            >
              <ProjectDisplayCard projectTitle="Custom made effects">
                <VentureUIImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              delay={400}
              duration={0.5}
              animateIn="fadeInLeftBig"
            >
              <ProjectDisplayCard placement="left" projectTitle="My website">
                <LandingPageImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              delay={450}
              duration={0.5}
              animateIn="fadeInRightBig"
            >
              <ProjectDisplayCard projectTitle="Udemy courses' projects">
                <UdemyImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              delay={500}
              duration={0.5}
              animateIn="fadeInLeftBig"
            >
              <ProjectDisplayCard projectTitle="Zentors UX design">
                <ZentorsUIImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              delay={550}
              duration={0.5}
              animateIn="fadeInRightBig"
            >
              <ProjectDisplayCard projectTitle="Other UI fiddles">
                <OtherFiddlesImage />
              </ProjectDisplayCard>
            </ScrollAnimation>
          </ProjectDisplayCardsDiv>
          <ArrowDiv className="arrow-div">
            <ScrollAnimation delay={600} animateOnce animateIn="zoomIn">
              <StyledArrow onClick={onConnectClicked} />
            </ScrollAnimation>
          </ArrowDiv>
        </StyledProjectsDiv>
      </Fragment>
    );
  }
}

export default ProjectDisplayContainer;
