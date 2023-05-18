import type { Meta, StoryObj } from '@storybook/react';
import Hovertext from '../components/Hovertext';

const meta: Meta<typeof Hovertext> = {
  title: 'examples/Hovertext',
  component: Hovertext,
};

export default meta;

type Story = StoryObj<typeof Hovertext>;

export const Primary: Story = {}
