import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCharacter } from "../redux/actions/CharacterActions";
import CharComponent from "./CharacterComponent";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const CharactersListing = () => {
  const dispatch = useDispatch();

  const fetchCharacters = async () => {
    const response = await axios
      .get("https://rickandmortyapi.com/api/character/?page=2")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setCharacter(response.data.results));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <Grid
        sx={{
          mt: 6,
          ml: 0,
          mr: 0,
          mb: 5,
          display: "flex",
          justifyContent: "center",
        }}
        container
        spacing={2}
      >
        <CharComponent />
      </Grid>
    </div>
  );
};

export default CharactersListing;
