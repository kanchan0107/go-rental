import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import premierCar from "../assets/premier.png";
import lowCostCar from "../assets/lowcost-car.png";

const RentalCards = () => {
  const cards = [
    {
      title: "The Premier Choice Car Rental",
      subheading:
        "The future of stunning portraits features over 300 models of diverse ages and ethnicities.",
      image: premierCar,
    },
    {
      title: "Low Cost Rental Made Quick And Simple",
      subheading:
        "The future of stunning portraits features over 300 models of diverse ages and ethnicities.",
      image: lowCostCar,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        paddingTop: "7rem",
        gap: { xs: "16px", md: "24px" }, // Reduced gap between cards
        px: { xs: 2, md: 4 }, // Padding for small and large screens
        height:"25rem"
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            backgroundColor: "#202020",
            color: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden", 
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column", 
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                textAlign: "left",
                mb: 1.5,
                fontFamily: "Montserrat",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: "#B0BEC5",
                textAlign: "left",
                mb: 2,
                fontFamily: "Montserrat",
              }}
            >
              {card.subheading}
            </Typography>
            <Button
              sx={{
                width: "150px",
                backgroundColor: "#000",
                color: "#fff",
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Rental Car
            </Button>
          </CardContent>
          <Box
            component="img"
            src={card.image}
            alt={card.title}
            sx={{
              flex: 1,
              height: "350px",
              width: "",
              objectFit: "cover",
              maxWidth: { xs: "100%", sm: "100%" }, 
            }}
          />
        </Card>
      ))}
    </Box>
  );
};

export default RentalCards;
