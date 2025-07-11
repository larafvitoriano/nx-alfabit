import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from '@lara/button';

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
    args: {
        text: 'Action',
        variant: 'primary',
        disabled: false
    }
};

export const PrimaryButtonDisabled: Story = {
    args: {
        ...PrimaryButton.args,
        disabled: true
    }
};

export const PrimaryOutlineButton: Story = {
    args: {
       ...PrimaryButton.args,
       variant: 'outline-primary',
       disabled: false
    }
};

export const PrimaryOutlineDisabledButton: Story = {
    args: {
       ...PrimaryOutlineButton.args,
       disabled: true
    }
};

export const SecondaryButton: Story = {
    args: {
        ...PrimaryButton.args,
        variant: 'secondary',
        disabled: false
    }
};

export const SecondaryButtonDisabled: Story = {
    args: {
        ...SecondaryButton.args,
        disabled: true
    }
};

export const SuccessButton: Story = {
  args: { 
    ...PrimaryButton.args,
    variant: 'success',
    disabled: false
  }
}

export const SuccessButtonDisabled: Story = {
  args: { 
    ...SuccessButton.args,
    disabled: true
  }
}

export const WarningButton: Story = {
  args: { 
    ...PrimaryButton.args,
    variant: 'warning',
    disabled: false
  }
}

export const WarningButtonDisabled: Story = {
  args: { 
    ...WarningButton.args,
    disabled: true
  }
}

export const DangerButton: Story = {
  args: { 
    ...PrimaryButton.args,
    variant: 'danger',
    disabled: false
  }
}

export const DangerButtonDisabled: Story = {
  args: { 
    ...DangerButton.args,
    disabled: true
  }
}