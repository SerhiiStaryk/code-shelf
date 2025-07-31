import { Box, Typography, Card, CardContent, Paper, List, ListItem, ListItemText } from '@mui/material';

export const UsefulCSSToolsAndResources = () => {
  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
      >
        Useful CSS Tools & Resources
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              CSS Validators
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary='W3C CSS Validator'
                  secondary='Official CSS validation service'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='CSS Lint'
                  secondary='Code quality tool for CSS'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Stylelint'
                  secondary='Modern CSS linter'
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
              CSS Generators
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary='CSS Grid Generator'
                  secondary='Visual grid layout tool'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Flexbox Froggy'
                  secondary='Learn flexbox interactively'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='CSS Gradient Generator'
                  secondary='Create beautiful gradients'
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
              Browser Support
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary='Can I Use'
                  secondary='Browser compatibility tables'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='MDN Web Docs'
                  secondary='Comprehensive CSS documentation'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='CSS-Tricks'
                  secondary='CSS tutorials and examples'
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
              Performance Tools
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary='Chrome DevTools'
                  secondary='CSS performance profiling'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Lighthouse'
                  secondary='Performance auditing'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='WebPageTest'
                  secondary='Detailed performance analysis'
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
};
