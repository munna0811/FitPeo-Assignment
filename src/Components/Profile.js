import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import image from "../Images/Avatar.png";

export default function BasicCard() {
  return (
    <Card sx={{ height: 70, marginTop: 30 }}>
      <CardContent>
        <Avatar src={image} />
        <Typography variant="body2" sx={{ marginTop: -4.5, marginLeft: -9 }}>
          Envo
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: 14 }}
          color="text.secondary"
        >
          Project Manager
        </Typography>
      </CardContent>
    </Card>
  );
}
