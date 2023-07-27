import { Container, Paper } from "@mui/material";
import { useParams } from "react-router";


const Reservation = () => {
    const { screeningId, roomId } = useParams();

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
        Reservation of (Screening){screeningId} in (Room){roomId}
      </Paper>
    </Container>
    )
}

export default Reservation;