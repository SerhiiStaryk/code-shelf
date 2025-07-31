import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { ExpandMore, TrendingUp, CheckCircle, Info, Warning } from '@mui/icons-material';

export const CSSBestPractices = () => {
  return (
    <Paper sx={{ p: 4, mt: 6 }}>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
      >
        CSS Best Practices
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant='h6'>Organization & Structure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText
                primary='Use CSS custom properties for consistent theming'
                secondary='Define colors, spacing, and other values as CSS variables for easy maintenance'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText
                primary='Follow a consistent naming convention'
                secondary='Use BEM, CSS Modules, or another methodology consistently'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='success' />
              </ListItemIcon>
              <ListItemText
                primary='Group related styles together'
                secondary='Organize CSS by component or feature, not by property type'
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant='h6'>Performance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Warning color='warning' />
              </ListItemIcon>
              <ListItemText
                primary='Avoid expensive properties in animations'
                secondary='Use transform and opacity instead of changing layout properties'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Warning color='warning' />
              </ListItemIcon>
              <ListItemText
                primary='Minimize CSS specificity conflicts'
                secondary='Use classes instead of IDs and avoid deep nesting'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Warning color='warning' />
              </ListItemIcon>
              <ListItemText
                primary='Optimize critical rendering path'
                secondary='Inline critical CSS and defer non-critical styles'
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant='h6'>Accessibility</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Info color='info' />
              </ListItemIcon>
              <ListItemText
                primary='Ensure sufficient color contrast'
                secondary='Use tools to verify text meets WCAG contrast requirements'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Info color='info' />
              </ListItemIcon>
              <ListItemText
                primary="Don't rely solely on color to convey information"
                secondary='Use icons, text, or patterns in addition to color'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Info color='info' />
              </ListItemIcon>
              <ListItemText
                primary='Provide focus indicators'
                secondary='Ensure keyboard navigation is visible and clear'
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant='h6'>Responsive Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <TrendingUp color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Use relative units'
                secondary='Prefer rem, em, %, and viewport units over fixed pixels'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TrendingUp color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Design mobile-first'
                secondary='Start with mobile styles and enhance for larger screens'
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TrendingUp color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Test across different devices'
                secondary="Don't rely solely on browser dev tools for responsive testing"
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
