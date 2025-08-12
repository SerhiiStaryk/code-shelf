import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Chip, Tabs, Tab, Stack } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';

import { categories } from './constants';
import { tips } from '../../data/tips';

export const Tips: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredTips = activeTab === 0 ? tips : tips.filter(tip => tip.category === categories[activeTab].name);

  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        Tips
      </Typography>
      <Typography
        variant='h6'
        color='text.secondary'
      >
        Useful tips and tricks for working with web development.
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
              >
                {tip.description}
              </Typography>

              <CodeBlock
                title='CSS Code'
                language='css'
                code={tip.code}
                showLineNumbers={false}
              />
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
