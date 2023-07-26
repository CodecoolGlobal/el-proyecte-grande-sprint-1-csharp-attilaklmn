import { Container, Paper } from "@mui/material";


const Filmlist = () => {
    return (
        <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          minWidth: "80%",
          minHeight: 200,
          margin: 3,
        }}
        elevation={3}
      >
        Film list.
      </Paper>
    </Container>
    )
}

export default Filmlist;