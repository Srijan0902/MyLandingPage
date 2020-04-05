import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  ProjectDisplayContainer,
} from '@containers';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';

class Projects extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <ProjectDisplayContainer />
      </ThemeProvider>
    );
  }
}

export default Projects;
