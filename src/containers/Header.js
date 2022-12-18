import { React } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";
const PAGES = ["About", "Characters"];
const PATH = ["/", "/chars"];

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box>
        <AppBar style={{ background: "#3F3B6C" }} position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography style={{ color: "white" }}>Rick and Morty</Typography>
            </Link>

            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs textColor="#FFFFFF">
                  {PAGES.map((page, index) => (
                    <Tab
                      value={page}
                      label={page}
                      to={`${PATH[index]}`}
                      component={Link}
                    />
                  ))}
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Header;
