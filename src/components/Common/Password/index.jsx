import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Password = ({ passwordRef, label, error, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      required
      margin='normal'
      fullWidth
      name='password'
      type={showPassword ? 'text' : 'password'}
      label={label || 'Password'}
      autoComplete='current-password'
      id='password'
      onChange={onChange}
      error={
        error?.password?.error
          ? error?.password?.error
          : error?.password?.userError
            ? error?.password?.userError
            : false
      }
      helperText={
        error.password.error
          ? error.password.msg
          : error.password.userError
            ? error.password.userMsg
            : ''
      }
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {/* {showPassword ? <IconUnlock /> : <IconLock />} */}
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputRef={passwordRef}
    />
  );
};

export default Password;
