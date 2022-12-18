import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CharacterComponent = () => {
  const characters = useSelector((state) => state.allCharacters.characters);
  const renderList = characters.map((character) => {
    const { id, image, name } = character;
    return (
      <Card key={id} sx={{ width: 280, m: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="160"
          image={image}
          key={id}
        />
        <CardContent>
          <Typography fontSize="22px" gutterBottom variant="h2" component="div">
            {name}
          </Typography>

          <Typography
            color="text.secondary"
            fontSize="16px"
            gutterBottom
            variant="h6"
            component="div"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    );
  });
  return <>{renderList}</>;
};

export default CharacterComponent;
