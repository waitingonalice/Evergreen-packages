import { Meta } from "@storybook/react";
import React from "react";
import { FormNativeSelect, FormNativeSelectProps } from "..";
import { NativeSelect, NativeSelectProps } from ".";

const meta: Meta<typeof NativeSelect> = {
  title: "Components/NativeSelect",
  component: NativeSelect,
};
export default meta;

const Template = (args: NativeSelectProps) => <NativeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: "Select an option",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};

const FormTemplate = (args: FormNativeSelectProps) => (
  <FormNativeSelect {...args} />
);

export const WithLabel = FormTemplate.bind({});
WithLabel.args = {
  ...Default.args,
  id: "form",
  label: "Label",
  subLabel: "Sub label",
};

export const WithError = FormTemplate.bind({});
WithError.args = {
  ...Default.args,
  showError: true,
  errorMessage: "This field is required",
};
