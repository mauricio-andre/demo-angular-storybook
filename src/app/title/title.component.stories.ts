import { Story, Meta } from '@storybook/angular/types-6-0';
import { TitleComponent } from './title.component';

export default {
  title: 'Others/Title',
  component: TitleComponent,
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
  template: '<h1>Simple header</h1>'
});

export const Title = Template.bind({});

