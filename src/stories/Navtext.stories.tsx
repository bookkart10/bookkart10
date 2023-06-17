import type { Meta, StoryObj } from '@storybook/react';
import Navtext from '../components/Navtext';

const meta: Meta<typeof Navtext> = {
  title: 'examples/Navtext',
  component: Navtext,
};

export default meta;

type Story = StoryObj<typeof Navtext>;

export const Primary: Story = {}



//import type { Meta, StoryObj } from '@storybook/react';
//import {Navtext} from '../components/Navtext';

//import { Unchecked } from './Navtext.stories';

//const meta: Meta<typeof Navtext> = {
  
  //title: 'Navtext',
  //component: Navtext,
//};

//export default meta;
//type Story = StoryObj<typeof Navtext>;

//export const OneItem: Story = {
  //args: {
    //children: <Unchecked {...Unchecked.args} />,
  //},
//};