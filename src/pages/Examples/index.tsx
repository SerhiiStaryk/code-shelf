import type { FC } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';
import { counterCode, formCode, timerCode } from '../../data/examplesCode';
import { Counter } from '../../components/Examples/Counter';
import { FormControls } from '../../components/Examples/FormControls';
import { Timer } from '../../components/Examples/Timer';

export const Examples: FC = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Interactive Examples
      </Typography>
      <Typography
        variant='h6'
        color='text.secondary'
        sx={{ mb: 4 }}
      >
        See the code in action with these interactive component examples
      </Typography>

      <Grid
        container
        spacing={4}
      >
        {/* Counter Example */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography
              variant='h5'
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Counter Component
            </Typography>

            <Counter />

            <CodeBlock
              code={counterCode}
              language='jsx'
              title='Counter Component Code'
            />
          </Paper>
        </Grid>

        {/* Form Example */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography
              variant='h5'
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Form Controls
            </Typography>

            <FormControls />

            <CodeBlock
              code={formCode}
              language='jsx'
              title='Form Controls Code'
            />
          </Paper>
        </Grid>

        {/* Timer Example */}
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography
              variant='h5'
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Timer Component
            </Typography>

            <Timer />

            <CodeBlock
              code={timerCode}
              language='jsx'
              title='Timer Component Code'
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
