import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from '.';

export default {
  title: 'Example/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

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
