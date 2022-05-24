import { Story, Meta } from '@storybook/react';
import { Rethree, RethreeProps } from './rethree';

export default {
  component: Rethree,
  title: 'Rethree',
} as Meta;

const Template: Story<RethreeProps> = (args) => <Rethree {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  rating: 0,
  flag: false,
};
