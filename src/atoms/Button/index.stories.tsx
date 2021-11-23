import Button from "./index";
import { Props } from "./index.d";
import { Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const ButtonPrimary: Story<Props> = Template.bind({});

ButtonPrimary.args = {
  label: "My button",
};
