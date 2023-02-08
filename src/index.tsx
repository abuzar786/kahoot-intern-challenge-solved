import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { GamePoints } from './GamePoints';
import { theme } from './theme';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GamePoints />
  </ThemeProvider>,
  document.querySelector('#root'),
);
