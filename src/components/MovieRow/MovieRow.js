import React, { Component, useEffect, useState } from "react";
import "./movierow.css";
import { styled } from "@mui/system";
import Carousel from "react-elastic-carousel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import ComponentDialog from "../ComponentDialog";
import useSWR from "swr";

const Item = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;

  color: #fff;
  margin: 15px;
  font-size: 4em;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Title = styled(DialogTitle)`
  background-image: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 400px;
`;

const Video = styled("video")`
  width: inherit;
  height: inherit;
  object-fit: cover;
`;

const Image = styled("img")`
  width: inherit;
  height: inherit;
  object-fit: cover;
  &:hover {
    display: none;
  }
`;

function MovieRow(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const fetcher = (...args) => fetch(...args).then((r) => r.json());
  const { data, error } = useSWR(
    "http://127.0.0.1:8003/api/v1/movies/",
    fetcher
  );
  const [dialogState, setDialogState] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleDialogClose = () => {
    setDialogState(false);
  };

  const onItemClick = (item) => {
    setSelectedItem(item);
    setDialogState(true);
  };

  const onItemHover = (item) => {
    setSelectedVideo(item.id);
  };
  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  return (
    <>
      <div className="carousel-wrapper">
        <h1>{props.rowTitle}</h1>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item
              onMouseOver={() => onItemHover(item)}
              onMouseOut={() => setSelectedVideo(null)}
              onClick={() => onItemClick(item)}
              key={item.id}
            >
              {item.id === selectedVideo ? (
                <Video
                  src={item.movie}
                  onMouseOver={(event) => event.target.play()}
                  controls
                />
              ) : (
                <Image src={item.poster} />
              )}
            </Item>
          ))}
        </Carousel>
        {/* {<ComponentDialog data={selectedItem} dialog={dialogState} onDialogClose={()=>handleDialogClose()}/>} */}
      </div>
    </>
  );
}

export default MovieRow;
