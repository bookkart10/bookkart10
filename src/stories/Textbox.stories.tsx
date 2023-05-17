import type { Meta, StoryObj } from '@storybook/react';
import Textbox from '../components/Textbox';

const meta: Meta<typeof Textbox> = {
  title: 'examples/Textbox',
  component: Textbox,
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Primary: Story = {}