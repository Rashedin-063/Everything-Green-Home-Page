import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: '#dddddd',
    color: '#666666',
    padding: '1.5rem 1rem',
    letterSpacing: '1.2px',
    lineHight: '150%',
    fontWeight: '500'
  },
  [`& .MuiTooltip-arrow`]: {
    color: '#dddddd',
  },
});

export default CustomTooltip;
