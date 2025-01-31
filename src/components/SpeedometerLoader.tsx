import { Box, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const SpeedometerContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  zIndex: 9999,
});

const SpeedometerNeedle = styled(motion.div)({
  width: '4px',
  height: '60px',
  background: '#3C83F6',
  position: 'absolute',
  bottom: '50%',
  left: '50%',
  transformOrigin: 'bottom',
  borderRadius: '4px',
});

const SpeedometerFace = styled(Box)({
  width: '200px',
  height: '100px',
  borderRadius: '100px 100px 0 0',
  border: '10px solid #3C83F6',
  borderBottom: 'none',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '20px',
    background: '#3C83F6',
    borderRadius: '50%',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const SpeedometerText = styled(motion.div)({
  color: '#fff',
  marginTop: '2rem',
  fontFamily: 'Montserrat',
  fontSize: '1.5rem',
  fontWeight: 600,
});

interface SpeedometerLoaderProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

const SpeedometerLoader = ({ isLoading, onLoadingComplete }: SpeedometerLoaderProps) => {
  const needleVariants = {
    initial: { rotate: -90 },
    animate: {
      rotate: 90,
      transition: {
        duration: 1.5,
        repeat: 2,
        ease: "easeInOut",
        repeatType: "reverse"
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        if (onLoadingComplete) {
          setTimeout(onLoadingComplete, 3000); // Complete after 3 seconds
        }
      }}
    >
      <SpeedometerContainer>
        <SpeedometerFace>
          <SpeedometerNeedle
            variants={needleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </SpeedometerFace>
        <SpeedometerText
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Loading your ride...
        </SpeedometerText>
        <CircularProgress 
          sx={{ 
            mt: 4,
            color: '#3C83F6',
          }} 
        />
      </SpeedometerContainer>
    </motion.div>
  );
};

export default SpeedometerLoader; 