import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const About = () => {
  return (
    <>
      <Box
        sx={{
          mt: { sm: 6, xs: 0 },
          pt: 8,
          pb: 6,
          flex: 1,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            sx={{ typography: { sm: "12px", xs: "42px" } }}
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Rick And Morty
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Rick and Morty is the Emmy award-winning half-hour animated hit
            comedy series on Adult Swim that follows a sociopathic genius
            scientist who drags his inherently timid grandson on insanely
            dangerous adventures across the universe.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              style={{ color: "white", backgroundColor: "#3F3B6C" }}
              href="/chars"
              variant="contained"
            >
              Characters
            </Button>
            <Button
              style={{ color: "#3F3B6C", borderColor: "#3F3B6C" }}
              href="https://www.tvguide.com/tvshows/rick-and-morty/1000563101/"
              variant="outlined"
            >
              Where to watch
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default About;
