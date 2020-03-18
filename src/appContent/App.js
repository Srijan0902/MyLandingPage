import React, { Component, Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  TopLayerContainer,
  VisionContainer,
  AboutMeContainer,
  FooterContainer,
  ProjectDisplayContainer,
} from '@containers';
import ParallaxWrapper from './ParallaxWrapper';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
   
        <ScrollAnimation animateIn="zoomIn">
          <TopLayerContainer />
          <Fragment>
            <VisionContainer />
            <AboutMeContainer />
            <ProjectDisplayContainer />
            <ScrollAnimation animateIn="fadeIn">
              <ParallaxWrapper />
            </ScrollAnimation>
            <FooterContainer />
          </Fragment>
        </ScrollAnimation>
      </ThemeProvider>
    );
  }
}

export default App;
