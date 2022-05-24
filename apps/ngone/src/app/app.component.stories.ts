import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AppComponent>;
const argTypes = {
  title: { control: 'text' },
  rating: { control: 'number' },
  flag: { defaultValue: false, control: { type: 'boolean' } },
};
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.argTypes = {
  ...argTypes,
};
