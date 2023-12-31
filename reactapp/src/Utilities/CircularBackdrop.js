import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularBackdrop(props) {
  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) =>
            Math.max.apply(Math, Object.values(theme.zIndex)) + 1,
        }}
        open={props.open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
