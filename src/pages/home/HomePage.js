import { Box } from "@mui/material";
import React, { Component } from "react";
import Layout from "../../layout/Layout";
import NetCarousel from "../../components/NetCarousel";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./homepage.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import MovieRow from "../../components/MovieRow/MovieRow";
 

const PlayButton = styled(Button)({
  backgroundColor: "white",
  border: "1px solid #fff",
  color: "#111",
  fontSize: "1.5rem",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  transition: "all 0.3s ease-in-out",
  marginLeft: "20px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
  },
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  
  render() {
    return (
      <Layout>
        <section class="hero">
          <img src="https://source.unsplash.com/random/1920x1080" />
          <div class="gradient"></div>
          <div class="content">
            <h1>Terminator 2</h1>
            <p>This is Terminator 2 played by Arnold Shwarz..</p>
            <div class="buttons">
              <PlayButton
                variant="outlined"
                startIcon={<PlayArrowIcon sx={{ fontSize: 100 }} />}
              >
                Play
              </PlayButton>
              <PlayButton
                variant="outlined"
                startIcon={<PlayArrowIcon sx={{ fontSize: 100 }} />}
              >
                Play
              </PlayButton>
            </div>
          </div>
        </section>
        <section class="movies">
         
            <MovieRow
              rowTitle="Recently Added"
              url="http://127.0.0.1:8003/api/v1/movies/"
            />
      
          <MovieRow
            rowTitle="ACTION"
            url="http://127.0.0.1:8003/api/v1/movies/"
          />
          <MovieRow
            rowTitle="SCI-FI"
            url="http://127.0.0.1:8003/api/v1/movies/"
          />
        </section>
      </Layout>
    );
  }
}

export default HomePage;
