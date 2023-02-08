import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {
  drawerWidth,
  items,
} from 'consts';

import { PlayerItems } from './components/PlayerItems';
import { ItemsGrid } from './components/ItemsGrid';
import { Main } from './components/Main';
import { AppBar } from './components/AppBar';
import { DrawerHeader } from './components/DrawerHeader';

export const GamePoints: React.FC = () => {
  const theme = useTheme();
  const [playerItems, setPlayerItems] = React.useState<string[]>([]);
  const [isDrawerOpen, setIsOpen] = React.useState(true);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  const handleSelectItem = (itemId: string) => {
    setPlayerItems([
      ...playerItems,
      itemId,
    ]);
  };

  const handleNewGame = () => {
    setPlayerItems([]);
  };

  return (
    <Box sx={{display: 'flex', height: '100%'}}>
      <AppBar
        isDrawerOpen={isDrawerOpen}
        onOpenDrawer={handleOpenDrawer}
      />

      <Main isDrawerOpen={isDrawerOpen}>
        <DrawerHeader />
        <ItemsGrid
          items={items}
          onSelectItem={handleSelectItem}
        />
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
      >
        <DrawerHeader>
          <Typography
            variant="h5"
            component="div"
            sx={{padding: theme.spacing(0, 2), flexGrow: 1}}
          >
            Player Items
          </Typography>
          <IconButton onClick={handleCloseDrawer}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>

        <PlayerItems
          items={items}
          onNewGame={handleNewGame}
          playerItems={playerItems}
        />
      </Drawer>
    </Box>
  );
};