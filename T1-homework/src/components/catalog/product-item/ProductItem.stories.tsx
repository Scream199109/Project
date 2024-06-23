import type {Meta, StoryObj} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';
import ProductItem from './ProductItem';

const meta = {
  title: 'Catalog/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter >
        <Story />
      </MemoryRouter>
    )
  ]
} satisfies Meta<typeof ProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
  args: {
    id: 1,
    title: 'Iphone',
    thumbnail: '/images/shoes.jpg',
    price: 123
  },
};
