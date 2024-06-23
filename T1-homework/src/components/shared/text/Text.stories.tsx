import type {Meta, StoryObj} from '@storybook/react';
import {Text} from './Text';

const meta = {
  title: 'Shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    variant: 'dark'
  },
};

export const DarkL: Story = {
  args: {
    children: 'Text',
    variant: 'dark',
    size: 'l'
  }
};

export const Large: Story = {
  args: {
    children: 'Text',
    size: 'xl'
  }
};
