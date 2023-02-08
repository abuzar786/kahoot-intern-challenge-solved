import React from "react";
import Grid from "@mui/material/Grid";

import { ItemsDefinition } from "types";
import { ItemButton } from "./ItemButton";

type ItemsGridProps = {
  items: ItemsDefinition;
  onSelectItem: (itemId: string) => void;
};

export const ItemsGrid: React.FC<ItemsGridProps> = ({
  items,
  onSelectItem,
}) => {
  return (
    <Grid container spacing={3}>
      {Object.values(items).map((item) => (
        <Grid item key={item.id}>
          <ItemButton item={item} onClick={onSelectItem} />
        </Grid>
      ))}
    </Grid>
  );
};
