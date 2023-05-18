import type { Meta, StoryObj } from '@storybook/react';
import Navtext from '../components/Navtext';

const meta: Meta<typeof Navtext> = {
  title: 'examples/Navtext',
  component: Navtext,
};

export default meta;

type Story = StoryObj<typeof Navtext>;

export const Primary: Story = {}