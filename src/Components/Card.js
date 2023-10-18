import * as React from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicCard({
  title,
  amount,
  status,
  icon,
  fontColor,
  backgroundColor,
  statusColor,
}) {
  return (
    <Card sx={{ width: 200, float: "left", margin: 2, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item
            sx={{
              border: "1px solid baclgroundColor",
              borderRadius: "50%",
              width: 43,
              padding: 3,
              background: backgroundColor,
              color: fontColor,
            }}
          >
            {icon}
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Typography color="text.secondary" variant="body2">
            {title}
          </Typography>
          <Typography variant="h6">{amount}</Typography>
          <Typography
            variant="body2"
            sx={{ color: statusColor, display: "inline" }}
          >
            {statusColor === "green" ? (
              <ArrowUpwardIcon sx={{ marginBottom: -0.6 }} />
            ) : (
              <ArrowDownwardIcon sx={{ marginBottom: -0.6 }} />
            )}

            {status}
          </Typography>
          <Typography variant="body2" sx={{ display: "inline" }}>
            this month
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
