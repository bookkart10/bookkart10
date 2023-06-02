import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'examples/Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {}