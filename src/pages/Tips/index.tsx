import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Stack } from '@mui/material';

import { categories } from './constants';
import { tips } from '../../data/tips';
import { CodeCard } from '../../components/CodeCard';

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
        {filteredTips.length === 0 ? (
          <Typography variant='body1'>No tips available for this category.</Typography>
        ) : (
          filteredTips.map((tip, index) => (
            <CodeCard
              key={index}
              example={tip}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};
