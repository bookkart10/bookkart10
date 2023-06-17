import type { Meta, StoryObj } from '@storybook/react';
import Slideshow from '../components/Slideshow';

const meta: Meta<typeof Slideshow> = {
  title: 'examples/Slideshow',
  component: Slideshow,
};

export default meta;

type Story = StoryObj<typeof Slideshow>;

export const Primary: Story = {}