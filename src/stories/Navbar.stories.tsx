import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'examples/Navbar',
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {}