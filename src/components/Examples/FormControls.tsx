import { useState } from 'react';
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
