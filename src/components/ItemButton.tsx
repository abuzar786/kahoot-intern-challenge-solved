import React from "react";
import Button from "@mui/material/Button";

import type { ItemDefinition } from "types";
import { Item } from "./Item";

type ItemButtonProps = {
  item: ItemDefinition;
  onClick: (itemId: string) => void;
};

export const ItemButton: React.FC<ItemButtonProps> = ({ item, onClick }) => {
  const handleClick = () => onClick(item.id);

  return (
    <Button tabIndex={-1} onClick={handleClick}>
      <Item item={item} />
    </Button>
  );
};
