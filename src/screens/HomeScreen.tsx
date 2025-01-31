import { Box, Button, Container, Typography, AppBar, Toolbar, Stack, useTheme, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SpeedometerLoader from '../components/SpeedometerLoader';
import Main from '../components/Cards';
import BookingSection from '../components/BookingSection';
import Cards from '../components/Cards';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3C83F6',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#2563eb',
  },
}));

// Animate components with Framer Motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);

const HomeScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
       <AnimatePresence>
        {isLoading && (
          <SpeedometerLoader 
            isLoading={isLoading} 
            onLoadingComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Black section on the left */}

        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: isMobile ? '100%' : '40%' }}
          transition={{ duration: 0.8 }}
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            bgcolor: '#141414',
            zIndex: 0,
          }}
        />
        
        {/* Navigation */}
        <AppBar position="relative" elevation={0} sx={{ bgcolor: 'transparent', zIndex: 2 }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
              <MotionTypography
                variant="h5"
                {...fadeInUp}
                sx={{
                  fontFamily: 'Abel',
                  color: '#ffffff',
                  fontSize: '26px',
                }}
              >
                Logo
              </MotionTypography>

              {/* Mobile Menu */}
              {isMobile ? (
                <>
                  <IconButton
                    color="inherit"
                    onClick={handleMobileMenuOpen}
                    sx={{ color: '#ffffff' }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={mobileMenuAnchor}
                    open={Boolean(mobileMenuAnchor)}
                    onClose={handleMobileMenuClose}
                  >
                    {['Home', 'Booking', 'Cars', 'Contacts'].map((item) => (
                      <MenuItem key={item} onClick={handleMobileMenuClose}>
                        {item}
                      </MenuItem>
                    ))}
                    <MenuItem>
                      <StyledButton fullWidth variant="contained">
                        Login | Sign up
                      </StyledButton>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <MotionStack
                  component={motion.div}
                  {...staggerChildren}
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  {['Home', 'Booking', 'Cars', 'Contacts'].map((item) => (
                    <MotionTypography
                      key={item}
                      {...fadeInUp}
                      sx={{
                        color: '#141414',
                        fontFamily: 'Poppins',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#3C83F6',
                        },
                      }}
                    >
                      {item}
                    </MotionTypography>
                  ))}
                  <MotionBox {...fadeInUp}>
                    <StyledButton variant="contained" sx={{ px: 2 }}>
                      Login
                    </StyledButton>
                  </MotionBox>
                </MotionStack>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="xl" sx={{ position: 'relative', mt: { xs: 4,  } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 8 },
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Left Content */}
            {!isMobile && (
              <MotionBox
              >
                <Box
        component="img"
        src="/images/background/car-image.jpg"
        alt="Car"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '67%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          maxWidth: { lg: '1002px', md: '1002px', sm: '100%' },
          maxHeight: { lg: '550px', md: '545px', sm: '100%' },
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
              </MotionBox>
            )}
           
            <MotionBox
              {...fadeInUp}
              sx={{
                width: { xs: '91%', md: '100%',lg:'45%' },
                p: {xs:'1.2rem',md:"3rem"},
                background: 'rgba(0, 0, 0, 0.15)',
                zIndex: 9999,
              }}
            >
  
 
              <MotionStack
                spacing={3}
                component={motion.div}
                {...staggerChildren}
              >
                <MotionTypography
                  variant="h1"
                  {...fadeInUp}
                  sx={{
                    color: '#ffffff',
                    fontFamily: 'Montserrat',
                    fontWeight: 800,
                    fontSize: { xs: '36px', sm: '48px',lg:"2.75rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Enjoy your life with
                  <br />
                  our comfortable
                  <br />
                  cars.
                </MotionTypography>

                <MotionTypography
                  {...fadeInUp}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontFamily: 'Poppins',
                    fontSize: { xs: '20px', sm: '24px',md:"1.15rem" },
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  Carent, is ready to serve the best
                  <br />
                  experience in car rental.
                </MotionTypography>

                <MotionBox
                  {...fadeInUp}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StyledButton
                    variant="contained"
                    size="large"
                    sx={{
                      width: { xs: '100%', sm: '256px' },
                      mt: 4,
                      fontSize: '24px',
                      fontFamily: 'Poppins',
                    }}
                  >
                    Explore Now
                  </StyledButton>
                </MotionBox>
              </MotionStack>
            </MotionBox>
            {/* Right Image - Hidden on mobile */}
         

          </Box>
        </Container>

        {/* Social Media Icons */}
        <MotionStack
          spacing={2}
          component={motion.div}
          {...staggerChildren}
          sx={{
            position: 'absolute',
            left: { xs: '20px', md: '40px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            paddingRight:"2rem"
          }}
        >
          <Box
            component="img"
            src="/images/icons/79affee5-0dd8-4f86-b8df-37d958e43ce2.png"
            sx={{ width: '1px', height: '38px' }}
          />
          <Stack spacing={1.5}>
            {[
              '2cd07c8b-9cf8-41da-bb17-87c13e2cc717.png',
              '8afaf959-cf6c-422a-8f02-01d5a2e06cf9.png',
              'dea5f5da-25cc-4804-a9e1-1db033abf112.png',
              'f4ed39f7-8437-4e3b-84b3-f45adb46df65.png',
              '0fd5a077-d712-4170-978d-a6a0f9d7118f.png',
            ].map((icon, index) => (
              <Box
                key={index}
                component="img"
                src={`/images/icons/${icon}`}
                sx={{ width: '16px', height: '16px' }}
              />
            ))}
          </Stack>
          <Box
            component="img"
            src="/images/icons/36888837-eb4b-4734-a757-9a26932fc847.png"
            sx={{ width: '1px', height: '38px' }}
          />
        </MotionStack>
      </Box>
      <BookingSection/>
      <Cards/>
    </>
  );
};

export default HomeScreen;