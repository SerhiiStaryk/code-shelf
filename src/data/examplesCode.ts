export const counterCode = `import { Box, Button, Card, CardContent, Typography } from '@mui/material';
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
};`;

export const formCode = `import { useState } from 'react';
import { Box, Card, CardContent, FormControlLabel, Slider, Switch, TextField, Typography } from '@mui/material';

export const FormControls = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ p: 2 }}>
          <TextField
            label='Enter text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Typography gutterBottom>Slider Value: {sliderValue}</Typography>
          <Slider
            value={sliderValue}
            onChange={(_, newValue) => setSliderValue(newValue as number)}
            sx={{ mb: 2 }}
          />

          <FormControlLabel
            control={
              <Switch
                checked={switchValue}
                onChange={e => setSwitchValue(e.target.checked)}
              />
            }
            label='Toggle Switch'
          />
        </Box>
      </CardContent>
    </Card>
  );
};
`;

export const timerCode = `import { useEffect, useState } from 'react';
import { PlayArrow, Refresh, Stop } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardContent, Typography } from '@mui/material';

export const Timer = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let interval: number | null = null;

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
};`;
