import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Paper,
  Tabs,
  Tab,
  Alert,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  ExpandMore,
  Code,
  Brush,
  AutoAwesome,
  TrendingUp,
  CheckCircle,
  Info,
  Warning,
  Security,
  Speed,
} from '@mui/icons-material';
import CodeBlock from '../../components/CodeBlock';

// TypeScript examples for demonstrations
const tsExamples = {
  typeAliases: `
    // Type aliases for better readability
    type UserId = string;
    type UserName = string;
    type UserAge = number;
    
    interface User {
      id: UserId;
      name: UserName;
      age: UserAge;
    }
    
    // Union types for flexible data
    type Status = 'loading' | 'success' | 'error';
    type Theme = 'light' | 'dark' | 'auto';
  `,

  generics: `
    // Generic function for type-safe operations
    function identity<T>(arg: T): T {
      return arg;
    }
    
    // Generic interface
    interface ApiResponse<T> {
      data: T;
      status: number;
      message: string;
    }
    
    // Generic class
    class Container<T> {
      private value: T;
      
      constructor(value: T) {
        this.value = value;
      }
      
      getValue(): T {
        return this.value;
      }
    }
  `,

  utilityTypes: `
    // Built-in utility types
    interface User {
      id: number;
      name: string;
      email: string;
      age: number;
    }
    
    // Make all properties optional
    type PartialUser = Partial<User>;
    
    // Make all properties required
    type RequiredUser = Required<User>;
    
    // Pick specific properties
    type UserBasicInfo = Pick<User, 'name' | 'email'>;
    
    // Omit specific properties
    type UserWithoutId = Omit<User, 'id'>;
    
    // Record type for key-value pairs
    type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
  `,

  advancedTypes: `
    // Conditional types
    type NonNullable<T> = T extends null | undefined ? never : T;
    
    // Mapped types
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    };
    
    // Template literal types
    type EventName = 'click' | 'hover' | 'focus';
    type HandlerName = \`on\${Capitalize<EventName>}\`;
    
    // Infer type from function
    type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
  `,

  errorHandling: `
    // Result type for error handling
    type Result<T, E = Error> = 
      | { success: true; data: T }
      | { success: false; error: E };
    
    // Async function with proper error handling
    async function fetchUser(id: string): Promise<Result<User>> {
      try {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const user = await response.json();
        return { success: true, data: user };
      } catch (error) {
        return { 
          success: false, 
          error: error instanceof Error ? error : new Error('Unknown error') 
        };
      }
    }
  `,

  strictNullChecks: `
    // With strict null checks enabled
    function processName(name: string | null | undefined): string {
      if (name === null || name === undefined) {
        return 'Anonymous';
      }
      return name.toUpperCase();
    }
    
    // Optional chaining and nullish coalescing
    const user = {
      profile: {
        name: 'John',
        address: {
          city: 'New York'
        }
      }
    };
    
    const city = user?.profile?.address?.city ?? 'Unknown';
    const name = user?.profile?.name ?? 'Anonymous';
  `,

  decorators: `
    // Class decorator
    function log(target: any) {
      console.log(\`Class \${target.name} is being defined\`);
    }
    
    // Method decorator
    function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.writable = false;
      return descriptor;
    }
    
    @log
    class Example {
      @readonly
      getValue() {
        return 'This method cannot be overwritten';
      }
    }
  `,

  asyncPatterns: `
    // Async/await with proper typing
    interface ApiUser {
      id: number;
      name: string;
      email: string;
    }
    
    async function fetchUsers(): Promise<ApiUser[]> {
      const response = await fetch('/api/users');
      return response.json();
    }
    
    // Promise.all for parallel execution
    async function fetchUserData(userIds: number[]): Promise<ApiUser[]> {
      const promises = userIds.map(id => fetch(\`/api/users/\${id}\`).then(res => res.json()));
      return Promise.all(promises);
    }
    
    // Error handling with async
    async function safeFetch<T>(url: string): Promise<T | null> {
      try {
        const response = await fetch(url);
        return await response.json();
      } catch {
        return null;
      }
    }
  `,

  typeGuards: `
    // Type guards for runtime type checking
    function isString(value: unknown): value is string {
      return typeof value === 'string';
    }
    
    function isNumber(value: unknown): value is number {
      return typeof value === 'number' && !isNaN(value);
    }
    
    function isUser(obj: unknown): obj is User {
      return obj !== null && 
             typeof obj === 'object' && 
             'id' in obj && 
             'name' in obj;
    }
    
    // Usage
    function processValue(value: unknown) {
      if (isString(value)) {
        return value.toUpperCase();
      }
      if (isNumber(value)) {
        return value * 2;
      }
      if (isUser(value)) {
        return \`Hello, \${value.name}\`;
      }
      return 'Unknown type';
    }
  `,

  performance: `
    // Lazy loading with TypeScript
    type Lazy<T> = () => T;
    
    function lazy<T>(factory: () => T): Lazy<T> {
      let value: T | undefined;
      return () => {
        if (value === undefined) {
          value = factory();
        }
        return value;
      };
    }
    
    // Memoization with proper typing
    function memoize<T extends (...args: any[]) => any>(
      fn: T
    ): T {
      const cache = new Map();
      return ((...args: Parameters<T>): ReturnType<T> => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
          return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
      }) as T;
    }
  `,

  modernFeatures: `
    // Template literal types
    type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
    type ApiEndpoint = \`/api/\${string}\`;
    type FullUrl = \`https://api.example.com\${ApiEndpoint}\`;
    
    // Satisfies operator (TypeScript 4.9+)
    const config = {
      api: 'https://api.example.com',
      timeout: 5000,
      retries: 3,
    } satisfies {
      api: string;
      timeout: number;
      retries: number;
    };
    
    // const assertions
    const COLORS = ['red', 'green', 'blue'] as const;
    type Color = typeof COLORS[number];
  `,
};

export const TSTips: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tips = [
    {
      title: 'Type Aliases & Interfaces',
      description: 'Create reusable and readable type definitions',
      code: tsExamples.typeAliases,
      category: 'Types',
    },
    {
      title: 'Generics',
      description: 'Write flexible, type-safe code that works with multiple types',
      code: tsExamples.generics,
      category: 'Advanced',
    },
    {
      title: 'Utility Types',
      description: 'Leverage built-in utility types for common transformations',
      code: tsExamples.utilityTypes,
      category: 'Types',
    },
    {
      title: 'Advanced Type Patterns',
      description: 'Use conditional types, mapped types, and template literals',
      code: tsExamples.advancedTypes,
      category: 'Advanced',
    },
    {
      title: 'Error Handling',
      description: 'Implement type-safe error handling patterns',
      code: tsExamples.errorHandling,
      category: 'Best Practices',
    },
    {
      title: 'Strict Null Checks',
      description: 'Handle null and undefined values safely',
      code: tsExamples.strictNullChecks,
      category: 'Safety',
    },
    {
      title: 'Decorators',
      description: 'Use decorators for metadata and cross-cutting concerns',
      code: tsExamples.decorators,
      category: 'Advanced',
    },
    {
      title: 'Async Patterns',
      description: 'Write type-safe asynchronous code',
      code: tsExamples.asyncPatterns,
      category: 'Async',
    },
    {
      title: 'Type Guards',
      description: 'Implement runtime type checking for better type safety',
      code: tsExamples.typeGuards,
      category: 'Safety',
    },
    {
      title: 'Performance Optimizations',
      description: 'Use TypeScript features for better performance',
      code: tsExamples.performance,
      category: 'Performance',
    },
    {
      title: 'Modern TypeScript Features',
      description: 'Leverage the latest TypeScript features',
      code: tsExamples.modernFeatures,
      category: 'Modern',
    },
  ];

  const categories = [
    { name: 'All Tips', icon: <Code /> },
    { name: 'Types', icon: <Brush /> },
    { name: 'Advanced', icon: <AutoAwesome /> },
    { name: 'Safety', icon: <Security /> },
    { name: 'Async', icon: <TrendingUp /> },
    { name: 'Performance', icon: <Speed /> },
    { name: 'Best Practices', icon: <CheckCircle /> },
    { name: 'Modern', icon: <Info /> },
  ];

  const filteredTips = activeTab === 0 ? tips : tips.filter(tip => tip.category === categories[activeTab].name);

  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        TypeScript Tips & Tricks
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
        paragraph
      >
        Essential TypeScript techniques and best practices for modern development
      </Typography>

      <Alert
        severity='info'
        sx={{ mb: 4 }}
      >
        <Typography variant='body2'>
          These TypeScript tips cover everything from basic type definitions to advanced patterns. Each tip includes
          practical code examples you can use in your projects.
        </Typography>
      </Alert>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        sx={{ mb: 4 }}
      >
        {categories.map((category, index) => (
          <Tab
            key={category.name}
            label={category.name}
            icon={category.icon}
            iconPosition='start'
          />
        ))}
      </Tabs>

      <Stack spacing={3}>
        {filteredTips.map((tip, index) => (
          <Card
            key={index}
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Chip
                  label={tip.category}
                  size='small'
                  color='primary'
                  sx={{ mr: 2 }}
                />
                <Typography
                  variant='h6'
                  component='h3'
                >
                  {tip.title}
                </Typography>
              </Box>

              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                {tip.description}
              </Typography>

              <CodeBlock
                title='TypeScript Code'
                language='typescript'
                code={tip.code}
                showLineNumbers={false}
              />
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Paper sx={{ p: 4, mt: 6 }}>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
        >
          TypeScript Best Practices
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Type Safety</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Enable strict mode in tsconfig.json'
                  secondary='Use strict: true to catch more potential errors'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Avoid any type when possible'
                  secondary='Use unknown or proper type definitions instead'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Use type guards for runtime checks'
                  secondary='Implement proper type narrowing for better safety'
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Code Organization</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Separate types and interfaces'
                  secondary='Use interfaces for objects, types for unions and primitives'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Create reusable type utilities'
                  secondary='Build your own utility types for common patterns'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Use barrel exports'
                  secondary='Export types from index files for better organization'
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
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary='Use const assertions'
                  secondary='Prevent unnecessary type widening with const assertions'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary='Avoid complex conditional types'
                  secondary='Complex types can slow down compilation and IDE performance'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary='Use type-only imports'
                  secondary="Import types with 'import type' to avoid runtime overhead"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Error Handling</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Use Result types'
                  secondary='Create type-safe error handling patterns'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Handle async errors properly'
                  secondary='Use try-catch with proper typing for async operations'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Validate external data'
                  secondary='Use type guards to validate API responses and user input'
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Paper>

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
