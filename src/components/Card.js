import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

class CompCard extends Component {
  render() {
    return (
      <Card sx={{ maxWidth: 270, backgroundColor: "#141414" }} elevation={24}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="270px"
            height="145px"
            image={this.props.image}
            alt="green iguana"
          />
          <CardContent sx={{ color: "whitesmoke" }}>
            <Typography gutterBottom variant="h5" fontWeight={800} component="div">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="">
              {this.props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default CompCard;
