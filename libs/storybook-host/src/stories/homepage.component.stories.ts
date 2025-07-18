import type { Meta, StoryObj } from '@storybook/angular';
import { HomepageComponent } from '@lara/homepage';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<HomepageComponent> = {
  title: 'Pages/Home',
  component: HomepageComponent,
  decorators: [
    moduleMetadata({
      imports: [HomepageComponent],
    }),
  ],
  parameters: {
    docs: {
      autodocs: false 
    },
},
};

export default meta;
type Story = StoryObj<HomepageComponent>;

export const Default: Story = {};