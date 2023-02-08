import { styled } from '@mui/material/styles';

import { drawerWidth } from 'consts';

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen',
})<{ isDrawerOpen: boolean }>(
  ({theme, isDrawerOpen}) => ({
    flexGrow: 1,
    overflow: 'auto',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(isDrawerOpen && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);