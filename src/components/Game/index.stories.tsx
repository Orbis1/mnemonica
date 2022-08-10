import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Game } from '.';

export default {
  title: 'Example/Game',
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

export const Default = Template.bind({});

Default.args = { initialLevel: 0, onFinish: () => console.log('the end')};
