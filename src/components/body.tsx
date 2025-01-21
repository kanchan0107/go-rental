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
import c1 from '../assets/c1.png';
import h5 from '../assets/h5.png';
import n2 from '../assets/n2.png';

const carData = [
  {
    name: 'Jeep XD',
    image: j1, 
    passengers: 5,
    fuel: 'Gasoline',
    type: 'SUV',
    price: '₹260',
  },
  {
    name: 'Tesla',
    image: t1, 
    passengers: 5,
    fuel: 'Electric',
    type: 'Sedan',
    price: '₹250',
  },
  {
    name: 'Ferrari Enzo',
    image: f2, 
    passengers: 2,
    fuel: 'Electric',
    type: 'Sedan',
    price: '₹340',
  },
  {
    name: 'Creata',
    image: c1, 
    passengers: 4,
    fuel: 'Gasoline',
    type: 'Mini coupe',
    price: '₹160',
  },
  {
    name: 'Maruti',
    image: m1, 
    passengers: 5,
    fuel: 'Petrol',
    type: 'Hatchback',
    price: '₹220',
  },
  {
    name: 'Honda',
    image: h1, 
    passengers: 5,
    fuel: 'Diesel',
    type: 'Sedan',
    price: '₹180',
  },
  {
    name: 'Hector',
    image: h5, 
    passengers: 7,
    fuel: 'Hybrid',
    type: 'SUV',
    price: '₹210',
  },
  {
    name: 'Nexon',
    image: n2, 
    passengers: 5,
    fuel: 'Hybrid',
    type: 'SUV',
    price: '₹240',
  }
];

const CarCard = ({ car }) => (
  <Card sx={{ maxWidth: 310, m: 2 }}>
    <CardMedia
      component="img"
      height="300"
      image={car.image} 
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
    <Button variant="contained" color="primary" sx={{ width: '340px' }}>
      Book Now
    </Button>
  </Card>
);

const CarList = () => (
  <Grid container spacing={2}>
    {carData.map((car, index) => (
      <Grid item xs={10} sm={5} md={3} key={index}>
        <CarCard car={car} />
      </Grid>
    ))}
  </Grid>
);

export default CarList;
