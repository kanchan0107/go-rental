import { Box, Container, TextField, MenuItem, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '60px',
  padding: '8px 16px',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fafafa',
  borderRadius: '4px',
  marginBottom: '16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    padding: '12px',
  }
}));

const InputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));

const StyledInput = styled('input')(({ theme }) => ({
  border: 'none',
  background: 'none',
  fontSize: '16px',
  color: '#141414',
  width: '100%',
  '&:focus': {
    outline: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  }
}));

const StyledSelect = styled('select')(({ theme }) => ({
  border: 'none',
  background: 'none',
  fontSize: '16px',
  color: '#141414',
  width: '100%',
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  }
}));

interface BookingData {
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  carType: string;
}

const BookingSection = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    carType: '',
  });

  const carTypes = [
    'SUV',
    'Sedan',
    'Sports Car',
    'Electric',
    'Luxury',
    'Compact',
  ];

  const locations = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Data:', bookingData);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        width: '100%',
        py: { xs: 4, sm: 6 },
        backgroundColor: 'rgba(60, 131, 246, 0.03)',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: '24px', sm: '32px' },
            fontWeight: 600,
            fontFamily: 'Montserrat',
            color: '#141414',
          }}
        >
          Book Now
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '1040px',
            margin: '0 auto',
            padding: { xs: 2, sm: 4 },
            backgroundColor: 'rgba(60, 131, 246, 0.1)',
            borderRadius: '8px',
          }}
        >
          {/* Pickup Location */}
          <StyledBox>
            <InputWrapper>
              <LocationOnIcon sx={{ color: '#3C83F6' }} />
              <StyledSelect
                value={bookingData.pickupLocation}
                onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
              >
                <option value="">Select Pickup Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </StyledSelect>
            </InputWrapper>
          </StyledBox>

          {/* Car Type */}
          <StyledBox>
            <InputWrapper>
              <DirectionsCarIcon sx={{ color: '#3C83F6' }} />
              <StyledSelect
                value={bookingData.carType}
                onChange={(e) => setBookingData({ ...bookingData, carType: e.target.value })}
              >
                <option value="">Select Car Type</option>
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </StyledSelect>
            </InputWrapper>
          </StyledBox>

          {/* Pickup Date & Time */}
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <StyledBox sx={{ flex: 1, mb: { xs: 0, sm: 2 } }}>
              <InputWrapper>
                <CalendarTodayIcon sx={{ color: '#3C83F6' }} />
                <StyledInput
                  type="date"
                  value={bookingData.pickupDate}
                  onChange={(e) => setBookingData({ ...bookingData, pickupDate: e.target.value })}
                />
              </InputWrapper>
            </StyledBox>
            <StyledBox sx={{ flex: 1, mb: { xs: 0, sm: 2 } }}>
              <InputWrapper>
                <AccessTimeIcon sx={{ color: '#3C83F6' }} />
                <StyledInput
                  type="time"
                  value={bookingData.pickupTime}
                  onChange={(e) => setBookingData({ ...bookingData, pickupTime: e.target.value })}
                />
              </InputWrapper>
            </StyledBox>
          </Box>

          {/* Return Date & Time */}
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <StyledBox sx={{ flex: 1 }}>
              <InputWrapper>
                <CalendarTodayIcon sx={{ color: '#3C83F6' }} />
                <StyledInput
                  type="date"
                  value={bookingData.returnDate}
                  onChange={(e) => setBookingData({ ...bookingData, returnDate: e.target.value })}
                />
              </InputWrapper>
            </StyledBox>
            <StyledBox sx={{ flex: 1 }}>
              <InputWrapper>
                <AccessTimeIcon sx={{ color: '#3C83F6' }} />
                <StyledInput
                  type="time"
                  value={bookingData.returnTime}
                  onChange={(e) => setBookingData({ ...bookingData, returnTime: e.target.value })}
                />
              </InputWrapper>
            </StyledBox>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              alignSelf: 'center',
              mt: 2,
              py: 1.5,
              px: 4,
              bgcolor: '#3C83F6',
              color: '#ffffff',
              fontSize: { xs: '14px', sm: '16px' },
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#2563eb',
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BookingSection;