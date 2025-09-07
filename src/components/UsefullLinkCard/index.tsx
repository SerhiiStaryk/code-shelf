import { Typography, Card, CardContent, List } from '@mui/material';
import { UsefullLikItem, type UsefullLinkItemProps } from './UsefullLikItem';

export type UsefullLinkCardProps = {
  title: string;
  links: UsefullLinkItemProps[];
};

export const UsefullLinkCard = ({ title, links }: UsefullLinkCardProps) => (
  <Card>
    <CardContent>
      <Typography
        variant='h6'
        gutterBottom
      >
        {title}
      </Typography>
      <List dense>
        {links.map(link => (
          <UsefullLikItem
            name={link.name}
            url={link.url}
            description={link.description}
          />
        ))}
      </List>
    </CardContent>
  </Card>
);
