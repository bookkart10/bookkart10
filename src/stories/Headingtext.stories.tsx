import type { Meta, StoryObj } from '@storybook/react';
import Headingtext from '../components/Headingtext';

const meta: Meta<typeof Headingtext> = {
  title: 'examples/Headingtext',
  component: Headingtext,
};

export default meta;

type Story = StoryObj<typeof Headingtext>;

export const Primary: Story = {}