import { useEffect, useState } from 'react';
import { PlayArrow, Refresh, Stop } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardContent, Typography } from '@mui/material';

export const Timer = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = (): void => setIsRunning(true);
  const handleStop = (): void => setIsRunning(false);
  const handleTimerReset = (): void => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <Card sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Typography
            variant='h4'
            sx={{ mb: 2 }}
          >
            Timer: {counter}s
          </Typography>

          {isRunning && (
            <Alert
              severity='info'
              sx={{ mb: 2 }}
            >
              Timer is running...
            </Alert>
          )}

          <Button
            variant='contained'
            startIcon={<PlayArrow />}
            onClick={handleStart}
            disabled={isRunning}
            sx={{ mr: 1 }}
          >
            Start
          </Button>
          <Button
            variant='outlined'
            startIcon={<Stop />}
            onClick={handleStop}
            disabled={!isRunning}
            sx={{ mr: 1 }}
          >
            Stop
          </Button>
          <Button
            variant='text'
            startIcon={<Refresh />}
            onClick={handleTimerReset}
          >
            Reset
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
