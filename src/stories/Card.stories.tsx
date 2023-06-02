import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'examples/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {}