import React from 'react';
import {
  List, Container, Typography, ListItem,
} from '@mui/material';

export function GraphsList(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          color: 'black',
        }}
      >
        Charts
      </Typography>
      <List>
        <ListItem>
          <p>sad</p>
        </ListItem>
      </List>
    </Container>
  );
}
