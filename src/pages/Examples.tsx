import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  Button,
  TextField,
  Slider,
  Switch,
  FormControlLabel,
  Alert,
  Grid,
} from '@mui/material'
import { PlayArrow, Stop, Refresh } from '@mui/icons-material'
import CodeBlock from '../components/CodeBlock'

const Examples: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')
  const [sliderValue, setSliderValue] = useState<number>(50)
  const [switchValue, setSwitchValue] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  const handleIncrement = (): void => setCounter(prev => prev + 1)
  const handleDecrement = (): void => setCounter(prev => prev - 1)
  const handleReset = (): void => setCounter(0)

  const counterCode = `import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Count: {count}
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleIncrement}
        sx={{ mr: 1 }}
      >
        Increment
      </Button>
      <Button 
        variant="outlined" 
        onClick={handleDecrement}
        sx={{ mr: 1 }}
      >
        Decrement
      </Button>
      <Button 
        variant="text" 
        onClick={handleReset}
      >
        Reset
      </Button>
    </Box>
  );
};`

  const formCode = `import React, { useState } from 'react';
import { TextField, Slider, Switch, FormControlLabel, Box } from '@mui/material';

const FormExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      
      <Typography gutterBottom>
        Slider Value: {sliderValue}
      </Typography>
      <Slider
        value={sliderValue}
        onChange={(e, newValue) => setSliderValue(newValue)}
        sx={{ mb: 2 }}
      />
      
      <FormControlLabel
        control={
          <Switch
            checked={switchValue}
            onChange={(e) => setSwitchValue(e.target.checked)}
          />
        }
        label="Toggle Switch"
      />
    </Box>
  );
};`

  const timerCode = `import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Alert } from '@mui/material';
import { PlayArrow, Stop, Refresh } from '@mui/icons-material';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Timer: {count}s
      </Typography>
      
      {isRunning && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Timer is running...
        </Alert>
      )}
      
      <Button
        variant="contained"
        startIcon={<PlayArrow />}
        onClick={handleStart}
        disabled={isRunning}
        sx={{ mr: 1 }}
      >
        Start
      </Button>
      <Button
        variant="outlined"
        startIcon={<Stop />}
        onClick={handleStop}
        disabled={!isRunning}
        sx={{ mr: 1 }}
      >
        Stop
      </Button>
      <Button
        variant="text"
        startIcon={<Refresh />}
        onClick={handleReset}
      >
        Reset
      </Button>
    </Box>
  );
};`

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isRunning) {
      interval = setInterval(() => {
        setCounter(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning])

  const handleStart = (): void => setIsRunning(true)
  const handleStop = (): void => setIsRunning(false)
  const handleTimerReset = (): void => {
    setIsRunning(false)
    setCounter(0)
  }

  return (
    <Box>
      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
        Interactive Examples
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        See the code in action with these interactive component examples
      </Typography>

      <Grid container spacing={4}>
        {/* Counter Example */}
        <Grid xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Counter Component
            </Typography>
            
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Count: {counter}
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={handleIncrement}
                    sx={{ mr: 1 }}
                  >
                    Increment
                  </Button>
                  <Button 
                    variant="outlined" 
                    onClick={handleDecrement}
                    sx={{ mr: 1 }}
                  >
                    Decrement
                  </Button>
                  <Button 
                    variant="text" 
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Box>
              </CardContent>
            </Card>

            <CodeBlock
              code={counterCode}
              language="jsx"
              title="Counter Component Code"
            />
          </Paper>
        </Grid>

        {/* Form Example */}
        <Grid xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Form Controls
            </Typography>
            
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ p: 2 }}>
                  <TextField
                    label="Enter text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  
                  <Typography gutterBottom>
                    Slider Value: {sliderValue}
                  </Typography>
                  <Slider
                    value={sliderValue}
                    onChange={(e, newValue) => setSliderValue(newValue as number)}
                    sx={{ mb: 2 }}
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switchValue}
                        onChange={(e) => setSwitchValue(e.target.checked)}
                      />
                    }
                    label="Toggle Switch"
                  />
                </Box>
              </CardContent>
            </Card>

            <CodeBlock
              code={formCode}
              language="jsx"
              title="Form Controls Code"
            />
          </Paper>
        </Grid>

        {/* Timer Example */}
        <Grid xs={12}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Timer Component
            </Typography>
            
            <Card sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Timer: {counter}s
                  </Typography>
                  
                  {isRunning && (
                    <Alert severity="info" sx={{ mb: 2 }}>
                      Timer is running...
                    </Alert>
                  )}
                  
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    onClick={handleStart}
                    disabled={isRunning}
                    sx={{ mr: 1 }}
                  >
                    Start
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Stop />}
                    onClick={handleStop}
                    disabled={!isRunning}
                    sx={{ mr: 1 }}
                  >
                    Stop
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<Refresh />}
                    onClick={handleTimerReset}
                  >
                    Reset
                  </Button>
                </Box>
              </CardContent>
            </Card>

            <CodeBlock
              code={timerCode}
              language="jsx"
              title="Timer Component Code"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Examples 