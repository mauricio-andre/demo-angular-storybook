import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Form/Button',
  component: ButtonComponent,
  argTypes: {
    click: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Send',
  type: 'submit',
  click: () => alert('Supimpa'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Send',
  type: 'button',
  primary: false,
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  type: 'button',
  click: () => alert('Supimpa'),
};

