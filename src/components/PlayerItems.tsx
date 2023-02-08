import React from "react";
import Grid from "@mui/material/Grid";

import { ItemsDefinition } from "types";
import { ItemRow, PlayerItemsList, Rows } from "./PlayerItemsList";
import { PlayerItemsSummary } from "./PlayerItemsSummary";

type PlayerItemsProps = {
  items: ItemsDefinition;
  onNewGame: () => void;
  playerItems: string[];
};

export const PlayerItems: React.FC<PlayerItemsProps> = ({
  items,
  onNewGame,
  playerItems,
}) => {
  const rows: Rows = React.useMemo(
    () => calculateRows(items, playerItems),
    [items, playerItems]
  );
  const [bonuses, total] = React.useMemo(
    () =>
      Object.values(rows).reduce(
        ([bonus, total]: [number, number], current) => [
          bonus + current.bonus,
          total + current.bonus + current.score,
        ],
        [0, 0]
      ),
    [rows]
  );

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: "100%",
        overflow: "hidden",
      }}
      alignItems="stretch"
      spacing={1}
      flexWrap="nowrap"
    >
      <Grid
        item
        flexGrow={1}
        sx={{
          overflow: "auto",
        }}
      >
        <PlayerItemsList rows={rows} />
      </Grid>
      <Grid item>
        <PlayerItemsSummary
          bonuses={bonuses}
          onNewGame={onNewGame}
          total={total}
        />
      </Grid>
    </Grid>
  );
};

function calculateRows(items: ItemsDefinition, playerItems: string[]): Rows {
  if (playerItems.length === 0) return {};

  const rows: Rows = {};

  playerItems.forEach((playerItem) => {
    let itemRow: ItemRow;
    let row = rows["row_" + playerItem];

    // first occurance
    if (!row) {
      itemRow = {
        item: items?.[playerItem],
        count: 1,
        score: items?.[playerItem].value,
        bonus: 0,
      };
    }
    // second onwards occurance
    else {
      row.count++;
      itemRow = {
        item: row.item,
        count: row.count,
        score: row.score + row.item.value,
        bonus:
          Math.floor(row.count / (row.item.bonus?.count || 1)) *
          (row.item.bonus?.amount || 0),
      };
    }

    rows["row_" + playerItem] = itemRow;
  });

  return rows;
}
