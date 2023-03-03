import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import { css } from '@mui/system';

const FormWrapper = styled('form')(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
);

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        sx={{ m: 1, width: '25ch' }}
      />
      <TextField
        required
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        sx={{ m: 1, width: '25ch' }}
      />
      <Button variant="contained" sx={{ m: 2 }} type="submit">
        Submit
      </Button>
    </FormWrapper>
  );
}


  export default SignUpForm;

  
