import React from 'react';
import Box from '@mui/material/Box';

import type { ItemDefinition } from 'types';

type ItemProps = {
  item: ItemDefinition,
  small?: boolean,
};

const smallItemSize = 50;
const largeItemSize = 150;

export const Item: React.FC<ItemProps> = ({
  item,
  small = false,
}) => {
  return (
    <Box sx={{
      aspectRatio: '1',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'primary.main',
      justifyContent: 'center',
      display: 'flex',
      width: small ? smallItemSize : largeItemSize,
    }}>
      {item.name}
    </Box>
  );
};