import React from 'react';
import { map } from 'ramda';

import { CanvasViewTemplate } from '../templates/CanvasViewTemplate';
import { Box } from '../atoms/Box';

export const TestView = () => {
  const c = 1.2;

  return (
    <CanvasViewTemplate>
      {map((position: [number, number, number]) => <Box position={position} />)(
        [
          [-c, 0, 0],
          [0, 0, 0],
          [c, 0, 0],
          [-c, c, 0],
          [0, c, 0],
          [c, c, 0],
          [-c, -c, 0],
          [0, -c, 0],
          [c, -c, 0],
        ],
      )}
    </CanvasViewTemplate>
  );
};
