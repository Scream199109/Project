import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Text} from '../text/Text';
import {Button} from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: <Text variant='dark'>
      Text
    </Text>,
    variant: 'clear',
  }
};

export const Large: Story = {
  args: {
    children: 'Text',
    size: 'xl'
  }
};
