import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7E7E7E',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D0CFCF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'r#D0CFCF',
    },
    '&:hover fieldset': {
      borderColor: '#D0CFCF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D0CFCF',
    },
  },
});

export default StyledTextField;
