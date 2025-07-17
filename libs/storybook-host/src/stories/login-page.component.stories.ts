import type { Meta, StoryObj } from '@storybook/angular';
import { LoginPageComponent } from '@lara/login-page';
import { moduleMetadata } from '@storybook/angular';

import { InputFieldComponent } from '@lara/input-field';
import { ButtonComponent } from '@lara/button';

const meta: Meta<LoginPageComponent> = {
  title: 'Pages/LoginPage',
  component: LoginPageComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginPageComponent, InputFieldComponent, ButtonComponent],
    }),
  ],
  parameters: {
    docs: {
      autodocs: false, 
    },
},
};

export default meta;
type Story = StoryObj<LoginPageComponent>;

export const Default: Story = {};
