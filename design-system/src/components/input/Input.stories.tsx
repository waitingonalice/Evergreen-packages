import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { FormInput } from "../form";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

export const Component = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Input
      id="input"
      placeholder="Placeholder"
      value={value}
      onChange={handleChange}
    />
  );
};

const Template = (args: React.ComponentProps<typeof Input>) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "input",
  placeholder: "Placeholder",
};

export const Password = Template.bind({});
Password.args = {
  id: "input",
  placeholder: "Placeholder",
  isPassword: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "input",
  placeholder: "Placeholder",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "input",
  placeholder: "Placeholder",
  showError: true,
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  id: "input",
  placeholder: "Placeholder",
  size: "small",
};

export const WithPrefixIcon = Template.bind({});
WithPrefixIcon.args = {
  id: "input",
  placeholder: "Placeholder",
  prefixIcon: <div className="text-primary-main">Icon</div>,
};

export const WithLabel = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <FormInput
      id="input"
      title="Input"
      subTitle="Sub title"
      required
      placeholder="Placeholder"
      value={value}
      onChange={handleChange}
    />
  );
};

export const withError = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <FormInput
      id="input"
      title="Input"
      required
      placeholder="Placeholder"
      value={value}
      onChange={handleChange}
      showError
      errorMessage="Error message"
    />
  );
};
