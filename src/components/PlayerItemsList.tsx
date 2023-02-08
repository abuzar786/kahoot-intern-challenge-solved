import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ItemDefinition } from 'types';
import { Item } from './Item';

export type ItemRow = {
  item: ItemDefinition,
  count: number,
  score: number,
  bonus: number,
}

export type Rows = Record<string, ItemRow>

type PlayerItemsListProps = {
  rows: Rows,
}

export const PlayerItemsList: React.FC<PlayerItemsListProps> = ({
  rows,
}) => {
  return (
    <TableContainer>
      <Table
        stickyHeader
        aria-label="player items"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              Item
            </TableCell>
            <TableCell>
              Qty
            </TableCell>
            <TableCell>
              Score
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rows).map(([key, {item, count, score, bonus}]) => (
            <TableRow key={key}>
              <TableCell>
                <Item
                  item={item}
                  small
                />
              </TableCell>
              <TableCell>
                {count}
              </TableCell>
              <TableCell>
                {score + bonus}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

