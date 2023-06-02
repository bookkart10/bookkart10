import type { Meta, StoryObj } from '@storybook/react';
import InputTextbox from '../components/InputTextbox';

const meta: Meta<typeof InputTextbox> = {
  title: 'examples/InputTextbox',
  component: InputTextbox,
};

export default meta;

type Story = StoryObj<typeof InputTextbox>;

export const Primary: Story = {}