import React from "react";
import { styled } from "@mui/system";
import { useState } from "react";

const Item = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;

  color: #fff;
  margin: 15px;
  font-size: 4em;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
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

const MovieCard = (props) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onItemClick = (item) => {
    setSelectedItem(item);
 
  };

  const onItemHover = (item) => {
    setSelectedVideo(item.id);
  };

  return (
    <Item
      onMouseOver={() => onItemHover(props.item)}
      onMouseOut={() => setSelectedVideo(null)}
      onClick={() => onItemClick(props.item)}
      key={props.item.id}
    >
      {props.item.id === selectedVideo ? (
        <Video
          src={props.item.movie}
          onMouseOver={(event) => event.target.play()}
          controls
        />
      ) : (
        <Image src={props.item.poster} />
      )}
    </Item>
  );
};

export default MovieCard;
