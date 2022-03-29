import { styled } from "@mui/system";
import { Button } from "@mui/material";

const PlayButton = styled(Button)({
    backgroundColor: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #000",
    },
});

