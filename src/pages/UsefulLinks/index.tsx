import React from 'react';
import { Box, Typography, Card, CardContent, Paper, List, ListItem, ListItemText } from '@mui/material';

export const UsefulLinks: React.FC = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        Usefull links
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
      >
        Collection of useful links for work in web development
      </Typography>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
        >
          Useful TypeScript Tools & Resources
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Type Checkers
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Compiler'
                    secondary='Official TypeScript compiler'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='ESLint TypeScript'
                    secondary='TypeScript-aware linting'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Prettier'
                    secondary='Code formatting with TypeScript support'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Development Tools
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Playground'
                    secondary='Online TypeScript editor'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Handbook'
                    secondary='Official documentation'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Examples'
                    secondary='Community examples and patterns'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Libraries & Frameworks
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='Zod'
                    secondary='TypeScript-first schema validation'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='io-ts'
                    secondary='Runtime type validation'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='TypeScript ESLint'
                    secondary='TypeScript-specific linting rules'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Learning Resources
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Deep Dive'
                    secondary='Comprehensive guide'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Weekly'
                    secondary='Weekly newsletter'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='TypeScript Community'
                    secondary='Discord and forums'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </Box>
  );
};
