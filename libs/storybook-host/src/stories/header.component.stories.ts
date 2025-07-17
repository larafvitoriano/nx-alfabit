import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from '@lara/header';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<HeaderComponent> = {
  title: 'Pages/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent],
    }),
  ],
  parameters: {
    docs: {
      autodocs: false 
    },
},
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
