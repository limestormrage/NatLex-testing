/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ListItem } from '@mui/material';

const options: Highcharts.Options = {
  title: {
    text: 'chart 1',
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 20],
  }],
  accessibility: {
    enabled: false,
  },
};

export function Chart(props: HighchartsReact.Props): JSX.Element {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <ListItem sx={{ justifyContent: 'center' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        run
        {...props}
      />
    </ListItem>
  );
}
