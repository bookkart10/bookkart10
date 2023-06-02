import type { Meta, StoryObj } from '@storybook/react';
import BookComponent from '../components/BookComponent';

const meta: Meta<typeof BookComponent> = {
  title: 'examples/BookComponent',
  component: BookComponent,
};

export default meta;

type Story = StoryObj<typeof BookComponent>;

export const Primary: Story = {}