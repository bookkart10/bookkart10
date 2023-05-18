import type { Meta, StoryObj } from '@storybook/react';
import Searchbar from '../components/Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'examples/Searchbar',
  component: Searchbar,
};

export default meta;

type Story = StoryObj<typeof Searchbar>;

export const Primary: Story = {}