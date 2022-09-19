import React from 'react';
import {
  List, Container, Typography, Toolbar,
} from '@mui/material';
import { Chart } from '../chart/chart';

export function GraphsList(): JSX.Element {
  return (
    <Toolbar disableGutters>
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
          <Chart />
        </List>
      </Container>
    </Toolbar>
  );
}
