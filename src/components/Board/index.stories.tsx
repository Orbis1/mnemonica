import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Board } from '.';

export default {
  title: 'Example/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Two = Template.bind({});

Two.args = {
  size: 2,
};

export const Five = Template.bind({});

Five.args = {
  size: 5,
};
