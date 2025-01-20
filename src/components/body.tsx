import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import j1 from '../assets/j1.png';
import f2 from '../assets/f2.png';
import t1 from '../assets/t1.png';
import m1 from '../assets/m1.png';
import h1 from '../assets/h1.png';


const carData = [
  {
    name: 'Jeep XD',
    image: j1, // Updated image variable name
    passengers: 5,
    fuel: 'Gasoline',
    type: 'SUV',
    price: '₹200',
  },
  {
    name: 'Tesla',
    image: t1, // Updated image variable name
    passengers: 5,
    fuel: 'Gasoline',
    type: 'SUV',
    price: '₹200',
  },
  {
    name: 'Ferrari Enzo',
    image: f2, // Updated image variable name
    passengers: 2,
    fuel: 'Electric',
    type: 'Sedan',
    price: '₹340',
  },
  {
    name: 'Creata',
    image: c1, // Updated image variable name
    passengers: 4,
    fuel: 'Gasoline',
    type: 'Mini coupe',
    price: '₹160',
  },
  {
    name: 'Maruti',
    image: m1, // Updated image variable name
    passengers: 5,
    fuel: 'Gasoline',
    type: 'SUV',
    price: '₹200',
  },
  {
    name: 'Honda',
    image: h1, // Updated image variable name
    passengers: 5,
    fuel: 'Gasoline',
    type: 'SUV',
    price: '₹200',
  }
];

const CarCard = ({ car }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia
      component="img"
      height="300"
      image={car.image} // Use the updated image variable
      alt={car.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {car.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {car.passengers} Passengers • {car.fuel} • {car.type}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }}>
        Daily rate from {car.price}
      </Typography>
    </CardContent>
    <Button variant="contained" color="primary" fullWidth>
      Book Now
    </Button>
  </Card>
);

const CarList = () => (
  <Grid container spacing={2}>
    {carData.map((car, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <CarCard car={car} />
      </Grid>
    ))}
  </Grid>
);

export default CarList;
