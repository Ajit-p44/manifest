import { motion } from 'framer-motion';
import { styled } from '@project44-manifest/react-styles';

export const StyledTooltip = styled(motion.div, {
  backgroundColor: '$palette-grey-700',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$palette-white',
  overflow: 'hidden',
  padding: '$x-small $small',
  position: 'relative',
  typography: '$caption',
  zIndex: '$tooltip',
});