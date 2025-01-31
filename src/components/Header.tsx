// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container, useTheme, useMediaQuery, Box, Stack   } from "@mui/material";
// import { styled } from '@mui/material/styles';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#3C83F6',
//   color: '#ffffff',
//   '&:hover': {
//     backgroundColor: '#2563eb',
//   },
// }));

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 }
// };    

// const staggerChildren = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };


// // Animate components with Framer Motion
// const MotionBox = motion(Box);
// const MotionTypography = motion(Typography);
// const MotionStack = motion(Stack);  
// const Header = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//     const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
//     const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//       setMobileMenuAnchor(event.currentTarget);
//     };
  
//     const handleMobileMenuClose = () => {
//       setMobileMenuAnchor(null);
//     };
    
//     const fadeInUp = {
//         initial: { opacity: 0, y: 20 },
//         animate: { opacity: 1, y: 0 },
//         transition: { duration: 0.6 }
//       };
      
//   return (  
//   <AppBar position="relative" elevation={0} sx={{ bgcolor: 'transparent', zIndex: 2 }}>
//   <Container maxWidth="xl">
//     <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
//       <MotionTypography
//         variant="h5"
//         {...fadeInUp}
//         sx={{
//           fontFamily: 'Abel',
//           color: '#ffffff',
//           fontSize: '26px',
//         }}
//       >
//         Logo
//       </MotionTypography>

//       {/* Mobile Menu */}
//       {isMobile ? (
//         <>
//           <IconButton
//             color="inherit"
//             onClick={handleMobileMenuOpen}
//             sx={{ color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={mobileMenuAnchor}
//             open={Boolean(mobileMenuAnchor)}
//             onClose={handleMobileMenuClose}
//           >
//             {['Home', 'Booking', 'Cars', 'Contacts'].map((item) => (
//               <MenuItem key={item} onClick={handleMobileMenuClose}>
//                 {item}
//               </MenuItem>
//             ))}
//             <MenuItem>
//               <StyledButton fullWidth variant="contained">
//                 Login | Sign up
//               </StyledButton>
//             </MenuItem>
//           </Menu>
//         </>
//       ) : (
//         <MotionStack
//           component={motion.div}
//           {...staggerChildren}
//           direction="row"
//           spacing={3}
//           alignItems="center"
//           sx={{
//             display: { xs: 'none', md: 'flex' },
//           }}
//         >
//           {['Home', 'Booking', 'Cars', 'Contacts'].map((item) => (
//             <MotionTypography
//               key={item}
//               {...fadeInUp}
//               sx={{
//                 color: '#141414',
//                 fontFamily: 'Poppins',
//                 cursor: 'pointer',
//                 '&:hover': {
//                   color: '#3C83F6',
//                 },
//               }}
//             >
//               {item}
//             </MotionTypography>
//           ))}
//           <MotionBox {...fadeInUp}>
//             <StyledButton variant="contained" sx={{ px: 2 }}>
//               Login | Sign up
//             </StyledButton>
//           </MotionBox>
//         </MotionStack>
//       )}
//     </Toolbar>
//   </Container>
// </AppBar>
//   )
// };

// export default Header;

