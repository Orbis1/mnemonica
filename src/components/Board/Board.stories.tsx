import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Board } from './Board';

export default {
  title: 'Example/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Default = Template.bind({});

Default.args = {
  cells: [1,2,3,4],
};
