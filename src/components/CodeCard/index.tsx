import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import CodeBlock from '../CodeBlock';
import type { CodeExample } from '../../types/data';

export type CodeCardProps = {
  example: CodeExample;
};

export const CodeCard = ({ example }: CodeCardProps) => {
  return (
    <Grid size={{ xs: 12 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Chip
            label={example.language.toUpperCase()}
            color='primary'
            size='small'
            sx={{ mr: 2 }}
          />
          <Typography
            variant='body2'
            color='text.secondary'
          >
            Click the copy button to copy the code
          </Typography>
        </Box>

        <CodeBlock
          title={example.title}
          description={example.description}
          code={example.code}
          language={example.language}
          source={example.source}
        />
      </Paper>
    </Grid>
  );
};
