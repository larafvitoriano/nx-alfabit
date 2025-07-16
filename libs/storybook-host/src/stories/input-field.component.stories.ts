import type { Meta, StoryObj } from "@storybook/angular";
import { InputFieldComponent } from '@lara/input-field';

const meta: Meta<InputFieldComponent> = {
    component: InputFieldComponent
}

export default meta;

type Story = StoryObj<InputFieldComponent>;

export const Default: Story = {
  args: {
    label: 'Nome',
    placeholder: '',
    type: 'text',
    showLabel: true,
    isReadOnly: false
  },
};