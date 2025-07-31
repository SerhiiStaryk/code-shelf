import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = (): void => setCounter(prev => prev + 1);
  const handleDecrement = (): void => setCounter(prev => prev - 1);
  const handleReset = (): void => setCounter(0);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Typography
            variant='h4'
            sx={{ mb: 2 }}
          >
            Count: {counter}
          </Typography>
          <Button
            variant='contained'
            onClick={handleIncrement}
            sx={{ mr: 1 }}
          >
            Increment
          </Button>
          <Button
            variant='outlined'
            onClick={handleDecrement}
            sx={{ mr: 1 }}
          >
            Decrement
          </Button>
          <Button
            variant='text'
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
