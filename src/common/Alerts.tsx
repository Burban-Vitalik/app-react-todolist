import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type PropsType = {
    message: string
}

// Помилка!
export function ErrorAlert(props: PropsType) {
  return (
    <Stack sx={{ width: '100%'}} spacing={2}>
      <Alert severity="error">
        {props.message}
      </Alert>
    </Stack>
  );
}

export function SuccessAlert() {
  return (
    <Stack sx={{ width: '100%'}} spacing={2}>
      <Alert severity="success">
        This is a success! — <strong>Welcome!</strong>
      </Alert>
    </Stack>
  );
}


