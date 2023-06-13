import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Button>;

//exporting primary varient of button
export const Primary: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Primary Label",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}
export const secondary: Story = {
  args:{
    intent:"secondary",
    fullwidth:true,
    children:"Secondary Label",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}

export const Disabled: Story = {
  args:{
    intent:"disabled",
    fullwidth:true,
    children:"Disabled Label",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  },
}
