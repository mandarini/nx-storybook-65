import { Story, Meta } from '@storybook/react';
import { Retwo, RetwoProps } from './retwo';

export default {
  component: Retwo,
  title: 'Retwo',
} as Meta;

const Template: Story<RetwoProps> = (args) => <Retwo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  rating: 0,
  flag: false,
};
