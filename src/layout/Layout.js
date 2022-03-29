import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../theme";
import { width } from "@mui/system";
import { Navigate, Link } from "react-router-dom";
import { StarRateTwoTone, ThreeSixty } from "@mui/icons-material";
import "./layout.css";
import Search from "../components/Search";

import { createGlobalState } from 'react-hooks-global-state';



export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      search: "",
    };
  }

  onSearch(event) {
    event.preventDefault();
    this.myRef.current.value = event.target.value;
    if (event.target.value.length === 0) {
      event.preventDefault();
      this.props.navigation("/");
      this.myRef.current.value = event.target.value;
     }  
    if (event.target.value.length === 1) {
      event.preventDefault();
      this.myRef.current.value = event.target.value;
      this.props.navigation("/search");
      
      
    }
  }

  onFocus(event) {
    event.preventDefault();
    this.props.navigation("/search");
  }

  render() {
 
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ backgroundColor: "rgba(0,0,0,0.85)" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                src={require("../netflixlogo.png")}
                component="img"
                sx={{ width: "92px", height: "25px", objectFit: "contain" }}
              ></Box>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Search/>
                <SearchIcon />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box component="main">{this.props.children}</Box>
      </ThemeProvider>
    );
  }
}

export default withHooks(Layout);

function withHooks(Component) {
  return function WrappedComponent(props) {

    const navigate = useNavigate();
    return (
      <Component {...props} navigation={navigate}/>
       
    );
  };
}