import { ListItem, ListItemText, ListItemButton } from '@mui/material';

export type UsefullLinkItemProps = {
  name: string;
  description: string;
  url: string;
};

export const UsefullLikItem = ({ name, description, url }: UsefullLinkItemProps) => (
  <ListItem>
    <ListItemButton
      component='a'
      href={url}
      target='_blank'
      rel='noopener'
    >
      <ListItemText
        primary={name}
        secondary={description}
      />
    </ListItemButton>
  </ListItem>
);
