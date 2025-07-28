import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Divider } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

interface CodeExample {
  title: string;
  description: string;
  language: string;
  code: string;
}

export const CodeShowcase: React.FC = () => {
  const codeExamples: CodeExample[] = [
    {
      title: 'React Component Example',
      description: 'A simple React functional component with hooks and Material-UI styling.',
      language: 'jsx',
      code: `import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
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
      >
        Decrement
      </Button>
    </Box>
  );
};

export default Counter;`,
    },
    {
      title: 'TypeScript Interface',
      description: 'TypeScript interface definitions with generics and utility types.',
      language: 'typescript',
      code: `// User interface
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
  profile?: {
    avatar?: string;
    bio?: string;
    location?: string;
  };
}

// Generic API response interface
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

// Utility types
type UserWithoutId = Omit<User, 'id'>;
type UserPreview = Pick<User, 'id' | 'name' | 'email'>;
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;

// Function with generic type
async function fetchUser<T extends User>(id: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    
    return {
      data,
      message: 'User fetched successfully',
      success: true,
      timestamp: new Date()
    };
  } catch (error) {
    throw new Error(\`Failed to fetch user: \${error}\`);
  }
}

// Usage example
const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  isActive: true,
  createdAt: new Date(),
  profile: {
    bio: 'Software Developer'
  }
};

// Type guards
function isUser(obj: any): obj is User {
  return obj && 
         typeof obj.id === 'string' &&
         typeof obj.name === 'string' &&
         typeof obj.email === 'string';
}`,
    },
    {
      title: 'JavaScript Array Methods',
      description: 'Common array manipulation methods with examples.',
      language: 'javascript',
      code: `// Array methods examples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// Map to double each number
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Reduce to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum); // 55

// Find first number greater than 5
const firstGreaterThan5 = numbers.find(num => num > 5);
console.log('First > 5:', firstGreaterThan5); // 6

// Check if all numbers are positive
const allPositive = numbers.every(num => num > 0);
console.log('All positive:', allPositive); // true`,
    },
    {
      title: 'CSS Grid Layout',
      description: 'Modern CSS Grid layout example with responsive design.',
      language: 'css',
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.grid-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 15px;
  }
}

@media (min-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
    },
    {
      title: 'Python Data Processing',
      description: 'Python example using pandas for data manipulation and analysis.',
      language: 'python',
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create sample data
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'age': [25, 30, 35, 28, 32],
    'salary': [50000, 60000, 75000, 55000, 65000],
    'department': ['IT', 'HR', 'IT', 'Marketing', 'IT']
}

df = pd.DataFrame(data)

# Basic statistics
print("DataFrame Info:")
print(df.info())
print("\\nBasic Statistics:")
print(df.describe())

# Group by department and calculate average salary
dept_salary = df.groupby('department')['salary'].agg(['mean', 'count'])
print("\\nAverage Salary by Department:")
print(dept_salary)

# Filter IT department employees
it_employees = df[df['department'] == 'IT']
print("\\nIT Department Employees:")
print(it_employees)

# Create a new column with salary categories
df['salary_category'] = pd.cut(df['salary'], 
                              bins=[0, 55000, 70000, float('inf')],
                              labels=['Low', 'Medium', 'High'])

print("\\nSalary Categories:")
print(df[['name', 'salary', 'salary_category']])`,
    },
    {
      title: 'SQL Database Queries',
      description: 'Common SQL queries for database operations and data analysis.',
      language: 'sql',
      code: `-- Create tables
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes_count INTEGER DEFAULT 0
);

-- Insert sample data
INSERT INTO users (username, email) VALUES
    ('john_doe', 'john@example.com'),
    ('jane_smith', 'jane@example.com'),
    ('bob_wilson', 'bob@example.com');

INSERT INTO posts (user_id, title, content) VALUES
    (1, 'First Post', 'This is my first post content'),
    (1, 'Second Post', 'Another interesting post'),
    (2, 'Hello World', 'Welcome to my blog'),
    (3, 'Tech Tips', 'Some useful programming tips');

-- Complex queries
-- Get users with their post counts
SELECT 
    u.username,
    u.email,
    COUNT(p.id) as post_count,
    AVG(p.likes_count) as avg_likes
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.is_active = TRUE
GROUP BY u.id, u.username, u.email
HAVING COUNT(p.id) > 0
ORDER BY post_count DESC;

-- Get recent posts with user information
SELECT 
    p.title,
    p.content,
    p.published_at,
    u.username,
    p.likes_count
FROM posts p
JOIN users u ON p.user_id = u.id
WHERE p.published_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY p.published_at DESC
LIMIT 10;

-- Update post likes
UPDATE posts 
SET likes_count = likes_count + 1 
WHERE id = 1;

-- Delete inactive users
DELETE FROM users 
WHERE is_active = FALSE 
AND created_at < CURRENT_DATE - INTERVAL '1 year';`,
    },
  ];

  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Code Showcase
      </Typography>
      <Typography
        variant='h6'
        color='text.secondary'
        sx={{ mb: 4 }}
      >
        Explore and copy beautiful code examples in various programming languages
      </Typography>

      <Grid
        container
        spacing={4}
      >
        {codeExamples.map((example, index) => (
          <Grid
            item
            xs={12}
            key={index}
          >
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
              />

              {index < codeExamples.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
