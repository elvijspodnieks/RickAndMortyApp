import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar } from "@mui/material";

function Copyright() {
  return (
    <Typography style={{ color: "white" }} variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Rick And Morty
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div elevation={0}>
      <AppBar
        style={{
          background: "#3F3B6C",
          bottom: 0,
          justifyContent: "flex-end",
          flex: 1,
        }}
        elevation={0}
        position="static"
      >
        <Container sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Link href="https://www.facebook.com" target="_blank">
            <FacebookIcon style={{ color: "white" }} sx={{ m: 0.5 }} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <TwitterIcon style={{ color: "white" }} sx={{ m: 0.5 }} />
          </Link>
          <Link href="https://github.com" target="_blank">
            <GitHubIcon style={{ color: "white" }} sx={{ m: 0.5 }} />
          </Link>
        </Container>
        <Box sx={{ p: 2 }} component="footer">
          <Copyright />
        </Box>
      </AppBar>
    </div>
  );
};
export default Footer;
