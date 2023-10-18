import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Barchart from "./Barchart";
import Grid from "@mui/material/Grid";
import Piechart from "./Piechart";
import Button from "./Button";
import Container from "@mui/material/Container";

export default function BasicCard() {
  return (
    <Container sx={{ marginTop: 3 }}>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={8} sx={{ paddingBottom: 2 }}>
          <Card sx={{ width: { xs: 290, lg: 750 }, maxHeight: 400 }}>
            <CardContent>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Overview
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Monthly Evening
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ float: "right", marginTop: -7 }}>
                <Button />
              </Grid>

              <Barchart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              width: { xs: 290, lg: 300 },
              maxHeight: 400,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Customer
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Customer that buy products
              </Typography>
              <Piechart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
