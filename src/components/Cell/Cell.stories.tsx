import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cell } from './Cell';

export default {
  title: 'Example/Cell',
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Default = Template.bind({});

Default.args = {
  selected: false,
};

export const Selected = Template.bind({});

Selected.args = {
  selected: true,
};

