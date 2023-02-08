import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

import { drawerWidth } from 'consts';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const BaseAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen',
})<{ isDrawerOpen: boolean }>(
  ({theme, isDrawerOpen}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isDrawerOpen && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  })
);

type AppBarProps = {
  isDrawerOpen: boolean,
  onOpenDrawer: () => void,
};

export const AppBar: React.FC<AppBarProps> = ({
  isDrawerOpen,
  onOpenDrawer,
}) => {
  return (
    <BaseAppBar
      position="fixed"
      isDrawerOpen={isDrawerOpen}
    >
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
          }}
          noWrap
          component="div"
        >
          Kahoot! Points
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open points"
          edge="end"
          onClick={onOpenDrawer}
          sx={{...(isDrawerOpen && {display: 'none'})}}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </BaseAppBar>
  )
}