import React from "react";
import "./index.css";
import { Box, Container, Typography,  Card, CardContent, CardMedia, Button, Stack, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2'
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  maxWidth: '380px',
  margin: '0 auto',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

interface CarData {
  id: number;
  name: string;
  image: string;
  price: number;
  location: string;
  specs: {
    fuel: string;
    speed: string;
    capacity: string;
  };
}

const featuredCars: CarData[] = [
  {
    id: 1,
    name: "BMW X1",
    image: "/images/cars/bmwx1.jpg",
    price: 99.00,
    location: "Jakarta",
    specs: {
      fuel: "90L",
      speed: "200km/h",
      capacity: "2 People"
    }
  },
  {
    id: 2,
    name: "Hyundai Creta",
    image: "/images/cars/creta.jpg",
    price: 80.00,
    location: "Bandung",
    specs: {
      fuel: "80L",
      speed: "180km/h",
      capacity: "2 People"
    }
  },
  {
    id: 3,
    name: "MG Hector",
    image: "/images/cars/hector.jpg",
    price: 75.00,
    location: "Surabaya",
    specs: {
      fuel: "70L",
      speed: "170km/h",
      capacity: "4 People"
    }
  },
  {
    id: 4,
    name: "Mahindra Scorpion",
    image: "/images/cars/scorpion.jpg",
    price: 85.00,
    location: "Jakarta",
    specs: {
      fuel: "85L",
      speed: "190km/h",
      capacity: "4 People"
    }
  },
  {
    id: 5,
    name: "Range Rover",
    image: "/images/cars/rangerover.jpg",
    price: 95.00,
    location: "Bandung",
    specs: {
      fuel: "75L",
      speed: "185km/h",
      capacity: "2 People"
    }
  },
  {
    id: 6,
    name: "Baleno",
    image: "/images/cars/baleno.jpg",
    price: 90.00,
    location: "Surabaya",
    specs: {
      fuel: "Electric",
      speed: "200km/h",
      capacity: "5 People"
    }
  }
];

export default function Main() {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        py: { xs: 4, md: 8 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: 600,
              color: '#141414',
              fontFamily: 'Montserrat',
              mb: 1,
              textAlign: 'center',
            }}
          >
            Our Featured Cars
          </Typography>
          <Box
            sx={{
              width: '100px',
              height: '4px',
              bgcolor: '#3C83F6',
              borderRadius: '2px',
            }}
          />
        </Box>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }} 
          sx={{ 
            mb: 4,
            justifyContent: 'center',
          }}
        >
          {featuredCars.map((car) => (
            <Grid spacing ={{xs:12,sm:6, lg:4}} key={car.id}>
              <StyledCard elevation={2}>
                <Box
                  component="img"
                  height={{ xs: '200px', sm: '220px', md: '240px' }}
                  src={car.image}
                  alt={car.name}
                  sx={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Stack spacing={1.5}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Montserrat',
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', sm: '1.2rem' },
                        }}
                      >
                        {car.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Montserrat',
                          fontWeight: 600,
                          color: '#3C83F6',
                          fontSize: { xs: '1.1rem', sm: '1.2rem' },
                        }}
                      >
                        ${car.price}/day
                      </Typography>
                    </Box>

                    <Grid container spacing={2}>
                      <Grid spacing ={{xs:6}}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocalGasStationIcon sx={{ fontSize: '1.2rem', color: '#3C83F6' }} />
                          <Typography 
                            variant="body2"
                            sx={{ 
                              fontSize: { xs: '0.875rem', sm: '0.9rem' },
                              color: '#4B5563',
                            }}
                          >
                            {car.specs.fuel}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid  size={{xs:6}}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <SpeedIcon sx={{ fontSize: '1.2rem', color: '#3C83F6' }} />
                          <Typography 
                            variant="body2"
                            sx={{ 
                              fontSize: { xs: '0.875rem', sm: '0.9rem' },
                              color: '#4B5563',
                            }}
                          >
                            {car.specs.speed}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid  size={{xs:6}}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <PeopleIcon sx={{ fontSize: '1.2rem', color: '#3C83F6' }} />
                          <Typography 
                            variant="body2"
                            sx={{ 
                              fontSize: { xs: '0.875rem', sm: '0.9rem' },
                              color: '#4B5563',
                            }}
                          >
                            {car.specs.capacity}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid  size={{xs:6}}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocationOnIcon sx={{ fontSize: '1.2rem', color: '#3C83F6' }} />
                          <Typography 
                            variant="body2"
                            sx={{ 
                              fontSize: { xs: '0.875rem', sm: '0.9rem' },
                              color: '#4B5563',
                            }}
                          >
                            {car.location}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: '#3C83F6',
                        py: 1.5,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: '#2563eb',
                        },
                      }}
                    >
                      Rent Now
                    </Button>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/cars')}
            sx={{
              borderColor: '#3C83F6',
              color: '#3C83F6',
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#2563eb',
                bgcolor: 'rgba(60, 131, 246, 0.04)',
              },
            }}
          >
            View All Cars
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
