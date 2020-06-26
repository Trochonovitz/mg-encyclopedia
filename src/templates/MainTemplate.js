import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Navbar from '../components/molecules/Navbar/Navbar';
import theme from '../theme/mainTheme';

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Navbar />
    {children}
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainTemplate;
