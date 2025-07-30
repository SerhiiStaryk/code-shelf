import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  Tabs,
  Tab,
  Alert,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Badge,
  Switch,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Rating,
  LinearProgress,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Breadcrumbs,
  Link,
  Pagination,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  ToggleButton,
  ToggleButtonGroup,
  Skeleton,
  AlertTitle,
  Snackbar,
  Backdrop,
  useTheme,
} from '@mui/material';
import {
  Code,
  Palette,
  Brush,
  AutoAwesome,
  TrendingUp,
  CheckCircle,
  Info,
  Warning,
  Speed,
  Add,
  Edit,
  Delete,
  Share,
  Settings,
  Person,
  Email,
  FileCopy,
  Save,
  Print,
} from '@mui/icons-material';

export const DesignSystem: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(2);
  const [sliderValue, setSliderValue] = useState<number>(30);
  const [toggleValue, setToggleValue] = useState('web');
  const [stepperActiveStep, setStepperActiveStep] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleToggleChange = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      setToggleValue(newValue);
    }
  };

  const handleNext = () => {
    setStepperActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setStepperActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setStepperActiveStep(0);
  };

  const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description: 'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const speedDialActions = [
    { icon: <FileCopy />, name: 'Copy' },
    { icon: <Save />, name: 'Save' },
    { icon: <Print />, name: 'Print' },
    { icon: <Share />, name: 'Share' },
  ];

  const categories = [
    { name: 'Overview', icon: <Palette /> },
    { name: 'Typography', icon: <Brush /> },
    { name: 'Colors', icon: <AutoAwesome /> },
    { name: 'Components', icon: <Code /> },
    { name: 'Layout', icon: <TrendingUp /> },
    { name: 'Feedback', icon: <CheckCircle /> },
    { name: 'Navigation', icon: <Speed /> },
    { name: 'Data Display', icon: <Info /> },
  ];

  const typographyExamples = {
    h1: 'Heading 1 - Display Large',
    h2: 'Heading 2 - Display Medium',
    h3: 'Heading 3 - Display Small',
    h4: 'Heading 4 - Headline Large',
    h5: 'Heading 5 - Headline Medium',
    h6: 'Heading 6 - Headline Small',
    subtitle1: 'Subtitle 1 - Title Large',
    subtitle2: 'Subtitle 2 - Title Medium',
    body1:
      'Body 1 - Body Large - This is the default body text style used for most content. It provides good readability and is suitable for paragraphs, descriptions, and general text content.',
    body2:
      'Body 2 - Body Medium - This is a smaller body text variant that can be used for secondary information, captions, or when you need more compact text.',
    button: 'Button Text - Label Large',
    caption: 'Caption - Label Small',
    overline: 'OVERLINE - Label Small',
  };

  const colorPalette = {
    primary: {
      main: theme.palette.primary.main,
      light: theme.palette.primary.light,
      dark: theme.palette.primary.dark,
    },
    secondary: {
      main: theme.palette.secondary.main,
      light: theme.palette.secondary.light,
      dark: theme.palette.secondary.dark,
    },
    error: {
      main: theme.palette.error.main,
      light: theme.palette.error.light,
      dark: theme.palette.error.dark,
    },
    warning: {
      main: theme.palette.warning.main,
      light: theme.palette.warning.light,
      dark: theme.palette.warning.dark,
    },
    info: {
      main: theme.palette.info.main,
      light: theme.palette.info.light,
      dark: theme.palette.info.dark,
    },
    success: {
      main: theme.palette.success.main,
      light: theme.palette.success.light,
      dark: theme.palette.success.dark,
    },
  };

  const spacingScale = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10];

  const renderOverview = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Design System Overview
      </Typography>

      <Alert
        severity='info'
        sx={{ mb: 4 }}
      >
        <Typography variant='body2'>
          This design system showcases Material-UI components, typography, colors, and design patterns. Use these
          components consistently across your application for a cohesive user experience.
        </Typography>
      </Alert>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Design Principles
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Consistency'
                  secondary='Use consistent spacing, typography, and component patterns'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Accessibility'
                  secondary='Ensure all components meet WCAG guidelines'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Responsive'
                  secondary='Design for all screen sizes and devices'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Performance'
                  secondary='Optimize for fast loading and smooth interactions'
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
              Component Categories
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText
                  primary='Input Components'
                  secondary='Forms, text fields, selects, and controls'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText
                  primary='Display Components'
                  secondary='Cards, lists, tables, and data visualization'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText
                  primary='Feedback Components'
                  secondary='Alerts, notifications, and progress indicators'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Speed />
                </ListItemIcon>
                <ListItemText
                  primary='Navigation Components'
                  secondary='Menus, breadcrumbs, and pagination'
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderTypography = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Typography Scale
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Our typography system is based on Material Design principles with clear hierarchy and consistent spacing.
      </Typography>

      <Stack spacing={3}>
        {Object.entries(typographyExamples).map(([variant, text]) => (
          <Card key={variant}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip
                  label={variant}
                  size='small'
                  color='primary'
                  sx={{ mr: 2 }}
                />
                <Typography
                  variant='caption'
                  color='text.secondary'
                >
                  {text.split(' - ')[1]}
                </Typography>
              </Box>
              <Typography variant={variant as any}>{text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant='h5'
          gutterBottom
        >
          Typography Usage Guidelines
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          <Box>
            <Typography
              variant='h6'
              gutterBottom
            >
              Headings
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary='Use H1 for page titles'
                  secondary='Main page heading, one per page'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Use H2-H4 for section headings'
                  secondary='Organize content hierarchy'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Use H5-H6 sparingly'
                  secondary='For subsections and small headings'
                />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              variant='h6'
              gutterBottom
            >
              Body Text
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary='Body1 for main content'
                  secondary='Default text for paragraphs and descriptions'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Body2 for secondary content'
                  secondary='Smaller text for captions and notes'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Caption for metadata'
                  secondary='File sizes, timestamps, and small labels'
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  const renderColors = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Color Palette
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Our color system provides semantic meaning and ensures accessibility compliance.
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
        {Object.entries(colorPalette).map(([colorName, colors]) => (
          <Card key={colorName}>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
                sx={{ textTransform: 'capitalize' }}
              >
                {colorName}
              </Typography>
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: colors.light,
                      borderRadius: 1,
                      mr: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <Typography variant='body2'>Light</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: colors.main,
                      borderRadius: 1,
                      mr: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <Typography variant='body2'>Main</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: colors.dark,
                      borderRadius: 1,
                      mr: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <Typography variant='body2'>Dark</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant='h5'
          gutterBottom
        >
          Color Usage Guidelines
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          <Box>
            <Typography
              variant='h6'
              gutterBottom
            >
              Semantic Colors
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Success for positive actions'
                  secondary='Confirmations, completions, and achievements'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Warning for caution'
                  secondary='Warnings, pending states, and attention'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary='Info for neutral information'
                  secondary='General information and updates'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Warning color='error' />
                </ListItemIcon>
                <ListItemText
                  primary='Error for problems'
                  secondary='Errors, failures, and destructive actions'
                />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              variant='h6'
              gutterBottom
            >
              Accessibility
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Minimum 4.5:1 contrast ratio'
                  secondary='For normal text and UI elements'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='3:1 contrast for large text'
                  secondary='For headings and large UI elements'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary="Don't rely on color alone"
                  secondary='Use icons, text, or patterns as well'
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  const renderComponents = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Core Components
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Essential UI components for building interfaces.
      </Typography>

      <Stack spacing={4}>
        {/* Buttons */}
        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Buttons
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              flexWrap='wrap'
              useFlexGap
            >
              <Button variant='contained'>Contained</Button>
              <Button variant='outlined'>Outlined</Button>
              <Button variant='text'>Text</Button>
              <Button
                variant='contained'
                color='secondary'
              >
                Secondary
              </Button>
              <Button
                variant='contained'
                color='error'
              >
                Error
              </Button>
              <Button
                variant='contained'
                disabled
              >
                Disabled
              </Button>
              <Button
                variant='contained'
                size='small'
              >
                Small
              </Button>
              <Button
                variant='contained'
                size='large'
              >
                Large
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* Inputs */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Text Fields
              </Typography>
              <Stack spacing={2}>
                <TextField
                  label='Standard'
                  variant='outlined'
                />
                <TextField
                  label='Filled'
                  variant='filled'
                />
                <TextField
                  label='Standard'
                  variant='standard'
                />
                <TextField
                  label='Password'
                  type='password'
                  variant='outlined'
                />
                <TextField
                  label='Multiline'
                  multiline
                  rows={3}
                  variant='outlined'
                />
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Form Controls
              </Typography>
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel>Select</InputLabel>
                  <Select
                    label='Select'
                    value=''
                  >
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                  </Select>
                </FormControl>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Checkbox'
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label='Switch'
                  />
                </FormGroup>

                <RadioGroup row>
                  <FormControlLabel
                    value='option1'
                    control={<Radio />}
                    label='Option 1'
                  />
                  <FormControlLabel
                    value='option2'
                    control={<Radio />}
                    label='Option 2'
                  />
                </RadioGroup>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Interactive Components */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Interactive Components
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography gutterBottom>Rating</Typography>
                  <Rating
                    value={rating}
                    onChange={(event, newValue) => setRating(newValue)}
                  />
                </Box>

                <Box>
                  <Typography gutterBottom>Slider</Typography>
                  <Slider
                    value={sliderValue}
                    onChange={(event, newValue) => setSliderValue(newValue as number)}
                  />
                </Box>

                <Box>
                  <Typography gutterBottom>Toggle Buttons</Typography>
                  <ToggleButtonGroup
                    value={toggleValue}
                    exclusive
                    onChange={handleToggleChange}
                  >
                    <ToggleButton value='web'>Web</ToggleButton>
                    <ToggleButton value='android'>Android</ToggleButton>
                    <ToggleButton value='ios'>iOS</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Progress Indicators
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography gutterBottom>Linear Progress</Typography>
                  <LinearProgress
                    variant='determinate'
                    value={75}
                  />
                </Box>

                <Box>
                  <Typography gutterBottom>Circular Progress</Typography>
                  <CircularProgress
                    variant='determinate'
                    value={75}
                  />
                </Box>

                <Box>
                  <Typography gutterBottom>Skeleton</Typography>
                  <Skeleton
                    variant='rectangular'
                    width='100%'
                    height={60}
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );

  const renderLayout = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Layout & Spacing
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Consistent spacing and layout patterns for organized interfaces.
      </Typography>

      <Stack spacing={4}>
        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Spacing Scale
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              paragraph
            >
              Our spacing system uses 8px as the base unit, multiplied by factors of 0.5, 1, 1.5, 2, etc.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))', gap: 2 }}>
              {spacingScale.map(spacing => (
                <Box
                  key={spacing}
                  sx={{
                    width: spacing * 8,
                    height: 40,
                    backgroundColor: 'primary.main',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                  }}
                >
                  {spacing}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Grid System
            </Typography>
            <Box
              sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 2 }}
            >
              <Paper
                sx={{ p: 2, textAlign: 'center', backgroundColor: 'primary.light', color: 'primary.contrastText' }}
              >
                xs=12 md=6 lg=3
              </Paper>
              <Paper
                sx={{ p: 2, textAlign: 'center', backgroundColor: 'secondary.light', color: 'secondary.contrastText' }}
              >
                xs=12 md=6 lg=3
              </Paper>
              <Paper
                sx={{ p: 2, textAlign: 'center', backgroundColor: 'success.light', color: 'success.contrastText' }}
              >
                xs=12 md=6 lg=3
              </Paper>
              <Paper
                sx={{ p: 2, textAlign: 'center', backgroundColor: 'warning.light', color: 'warning.contrastText' }}
              >
                xs=12 md=6 lg=3
              </Paper>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Stack Component
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              flexWrap='wrap'
              useFlexGap
            >
              <Paper sx={{ p: 2, minWidth: 100, textAlign: 'center' }}>Item 1</Paper>
              <Paper sx={{ p: 2, minWidth: 100, textAlign: 'center' }}>Item 2</Paper>
              <Paper sx={{ p: 2, minWidth: 100, textAlign: 'center' }}>Item 3</Paper>
              <Paper sx={{ p: 2, minWidth: 100, textAlign: 'center' }}>Item 4</Paper>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );

  const renderFeedback = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Feedback Components
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Components for providing user feedback and status information.
      </Typography>

      <Stack spacing={4}>
        <Stack spacing={2}>
          <Alert severity='success'>
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
          </Alert>
          <Alert severity='info'>
            <AlertTitle>Info</AlertTitle>
            This is an info alert — check it out!
          </Alert>
          <Alert severity='warning'>
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — check it out!
          </Alert>
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>
        </Stack>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Dialog
              </Typography>
              <Button
                variant='contained'
                onClick={() => setDialogOpen(true)}
              >
                Open Dialog
              </Button>
              <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
              >
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogContent>
                  <Typography>This is a dialog content. You can put any content here.</Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                  <Button
                    onClick={() => setDialogOpen(false)}
                    variant='contained'
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Snackbar
              </Typography>
              <Button
                variant='contained'
                onClick={() => setSnackbarOpen(true)}
              >
                Show Snackbar
              </Button>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                message='This is a snackbar message'
                action={
                  <Button
                    color='inherit'
                    size='small'
                    onClick={() => setSnackbarOpen(false)}
                  >
                    Close
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Backdrop
              </Typography>
              <Button
                variant='contained'
                onClick={() => setBackdropOpen(true)}
              >
                Show Backdrop
              </Button>
              <Backdrop
                sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                open={backdropOpen}
                onClick={() => setBackdropOpen(false)}
              >
                <CircularProgress color='inherit' />
              </Backdrop>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Tooltips
              </Typography>
              <Stack
                direction='row'
                spacing={2}
              >
                <Tooltip title='This is a tooltip'>
                  <Button>Hover me</Button>
                </Tooltip>
                <Tooltip
                  title='Delete'
                  placement='top'
                >
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title='Edit'
                  placement='bottom'
                >
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Tooltip>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );

  const renderNavigation = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Navigation Components
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Components for navigation and wayfinding.
      </Typography>

      <Stack spacing={4}>
        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Breadcrumbs
            </Typography>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link
                underline='hover'
                color='inherit'
                href='#'
              >
                Home
              </Link>
              <Link
                underline='hover'
                color='inherit'
                href='#'
              >
                Design System
              </Link>
              <Typography color='text.primary'>Navigation</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Stepper
            </Typography>
            <Stepper
              activeStep={stepperActiveStep}
              orientation='vertical'
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant='contained'
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {stepperActiveStep === steps.length && (
              <Paper
                square
                elevation={0}
                sx={{ p: 3, mt: 3, backgroundColor: 'grey.50' }}
              >
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Reset
                </Button>
              </Paper>
            )}
          </CardContent>
        </Card>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Pagination
              </Typography>
              <Pagination
                count={10}
                color='primary'
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Speed Dial
              </Typography>
              <Box sx={{ height: 200, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                  ariaLabel='SpeedDial example'
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon />}
                >
                  {speedDialActions.map(action => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              Floating Action Button
            </Typography>
            <Box sx={{ position: 'relative', height: 100 }}>
              <Fab
                color='primary'
                aria-label='add'
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
              >
                <Add />
              </Fab>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );

  const renderDataDisplay = () => (
    <Box>
      <Typography
        variant='h4'
        gutterBottom
      >
        Data Display Components
      </Typography>

      <Typography
        variant='body1'
        color='text.secondary'
        paragraph
      >
        Components for displaying data and information.
      </Typography>

      <Stack spacing={4}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Avatar
              </Typography>
              <Stack
                direction='row'
                spacing={2}
                alignItems='center'
              >
                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>N</Avatar>
                <Avatar sx={{ bgcolor: 'success.main' }}>A</Avatar>
                <Badge
                  badgeContent={4}
                  color='primary'
                >
                  <Avatar sx={{ bgcolor: 'error.main' }}>M</Avatar>
                </Badge>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Chip
              </Typography>
              <Stack
                direction='row'
                spacing={1}
                flexWrap='wrap'
                useFlexGap
              >
                <Chip label='Basic' />
                <Chip
                  label='Clickable'
                  clickable
                />
                <Chip
                  label='Deletable'
                  onDelete={() => {}}
                />
                <Chip
                  label='Primary'
                  color='primary'
                />
                <Chip
                  label='Secondary'
                  color='secondary'
                />
                <Chip
                  label='Success'
                  color='success'
                />
                <Chip
                  label='Error'
                  color='error'
                />
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Card>
          <CardContent>
            <Typography
              variant='h6'
              gutterBottom
            >
              List
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  primary='User Profile'
                  secondary='Manage your account settings'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary='Email'
                  secondary='Check your messages'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText
                  primary='Settings'
                  secondary='Configure your preferences'
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderOverview();
      case 1:
        return renderTypography();
      case 2:
        return renderColors();
      case 3:
        return renderComponents();
      case 4:
        return renderLayout();
      case 5:
        return renderFeedback();
      case 6:
        return renderNavigation();
      case 7:
        return renderDataDisplay();
      default:
        return renderOverview();
    }
  };

  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        Design System
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
        paragraph
      >
        Comprehensive design system showcasing Material-UI components and design patterns
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        sx={{ mb: 4 }}
      >
        {categories.map(category => (
          <Tab
            key={category.name}
            label={category.name}
            icon={category.icon}
            iconPosition='start'
          />
        ))}
      </Tabs>

      {renderContent()}
    </Box>
  );
};
