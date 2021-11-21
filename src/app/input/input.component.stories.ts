import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
  title: 'Form/Input',
  component: InputComponent,
  argTypes: {
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      description: 'default input placeholder',
      table: {
        type: {
          summary: 'details',
          detail: 'text displayed when Input is empty',
        },
      },
    },
  },
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const CompleteExample = Template.bind({});
CompleteExample.args = {
  id: 'user',
  label: 'Informe seu login',
  placeholder: 'Johndoe@example.com',
  iconName: 'person',
};

export const WithIconAndPlaceholder = Template.bind({});
WithIconAndPlaceholder.args = {
  placeholder: 'Informe seu login',
  iconName: 'person',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Informe os dados',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Informe seu login',
};
