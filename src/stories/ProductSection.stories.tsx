import type { Meta, StoryObj } from '@storybook/react';
import ProductSection from '../components/Productsection';

const meta: Meta<typeof ProductSection> = {
  title: 'examples/ProductSection',
  component: ProductSection,
};

export default meta;

type Story = StoryObj<typeof ProductSection>;

export const Primary: Story = {}
