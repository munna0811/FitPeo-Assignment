import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Card from "./Card";
import Chart from "./Chart";
import Table from "./ProductsTable";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        margin: { xs: 5, lg: 0 },
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            Hello Shahrukh &#128075;,
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "absolute",
          marginLeft: { lg: 30 },
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}
        >
          <Card
            title={"Earning"}
            amount={"$198k"}
            status={"37.8%"}
            fontColor={"green"}
            backgroundColor={"rgba(175, 247, 172, 0.4)"}
            icon={<CurrencyExchangeIcon sx={{ fontSize: 40 }} />}
            statusColor={"green"}
            sx={{ display: "inline" }}
          />
          <Card
            title={"Orders"}
            amount={"$2.4k"}
            status={"2%"}
            icon={<ListAltIcon sx={{ fontSize: 40 }} />}
            fontColor={"#b734eb"}
            backgroundColor={"#f2bef7"}
            statusColor={"red"}
            sx={{ display: "inline" }}
          />
          <Card
            title={"Balance"}
            amount={"2.4k"}
            status={"2%"}
            icon={<AccountBalanceWalletIcon sx={{ fontSize: 40 }} />}
            fontColor={"#2b0eeb"}
            backgroundColor={"#87d6f5"}
            statusColor={"red"}
            sx={{ display: "inline" }}
          />
          <Card
            title={"Total Sales"}
            amount={"$89k"}
            status={"11%"}
            icon={<WorkOutlineIcon sx={{ fontSize: 40 }} />}
            fontColor={"#f5071b"}
            backgroundColor={"#fabee0"}
            statusColor={"green"}
            sx={{ display: "inline" }}
          />
        </Box>
        <Box>
          <Chart />
        </Box>
        <Box>
          <Table />
        </Box>
      </Box>
    </Box>
  );
}
