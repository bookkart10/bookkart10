import type { Meta, StoryObj } from '@storybook/react';
import Button1 from '../components/Button1';

const meta: Meta<typeof Button1> = {
  title: 'examples/Button1',
  component: Button1,
};

export default meta;

type Story = StoryObj<typeof Button1>;

export const Primary: Story = {}
