// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
  title: "Components/atoms/Input",
  component: Input,
} as Meta;

function Template(args: InputProps) {
  return <Input {...args} />;
}

export const Default = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.args = {
  label: "Full Name",
};
