import type {Meta, StoryObj} from '@storybook/react';
import CartItem from 'pages/cart-page/CartItem';
import {store} from 'providers/store-provider/config/store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {CartProduct} from 'services/types/cart';

const meta = {
  title: 'CartItem',
  component: CartItem,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </MemoryRouter>
    )
  ]
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const product: CartProduct = {
  id: 1,
  quantity: 3,
  title: 'Samsung',
  price: 123,
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAfooY1CNUNDLuuBbwuY1KJxYEafOH1-6tA&s'
}

export const DefaultCartItem: Story = {
  args: {
    ...product
  }
};
