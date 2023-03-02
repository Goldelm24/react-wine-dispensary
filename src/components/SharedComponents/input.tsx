import React, { forwardRef } from 'react';
import { TextField  } from '@material-ui/core';

interface InputType{
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:InputType, ref) => {
    return (
      //Allows us to use Input like any react component
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
      ></TextField>
    );
  });