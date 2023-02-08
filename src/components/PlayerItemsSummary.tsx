import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import grey from "@mui/material/colors/grey";

type PlayerItemsSummaryProps = {
  bonuses: number;
  onNewGame: () => void;
  total: number;
};

export const PlayerItemsSummary: React.FC<PlayerItemsSummaryProps> = ({
  bonuses,
  onNewGame,
  total,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderTop: "1px solid",
        borderTopColor: grey[300],
      }}
      square
    >
      <CardContent>
        <Grid container spacing={1} alignItems="stretch" direction="column">
          <Grid item container justifyContent="space-between">
            Bonuses{" "}
            <Typography component="span" fontWeight="bold">
              {bonuses}
            </Typography>
          </Grid>

          <Grid item>
            <Divider />
          </Grid>

          <Grid item container spacing={1} alignItems="center">
            <Grid item flex={1}>
              Total{" "}
              <Typography component="div" fontWeight="bold">
                {total}
              </Typography>
            </Grid>

            <Grid item>
              <Button variant="contained" onClick={onNewGame}>
                New Game
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
