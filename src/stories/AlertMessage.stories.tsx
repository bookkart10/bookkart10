import type { Meta, StoryObj } from '@storybook/react';
import AlertMessage from '../components/AlertMessage';

const meta: Meta<typeof AlertMessage> = {
  title: 'examples/AlertMessage',
  component: AlertMessage,
};

export default meta;

type Story = StoryObj<typeof AlertMessage>;

export const Primary: Story = {}