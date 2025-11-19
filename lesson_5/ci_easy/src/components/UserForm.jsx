import React from "react";
import { Button, Checkbox, Form, Input, Radio, Select, Switch } from "antd";
import { useState } from "react";
const UserForm = () => {
  const [checked, setChecked] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-[680px] p-[100px] bg-white/45 z-1">
      <Form
        form={form}
        layout="vertical"
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true, dropdown_option: "1" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col gap-[32px]"
      >
        <Form.Item
          label="Username"
          name="username"
          className="!mb-0"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          className="!mb-0"
          rules={[{ required: true, message: "Please input your password!" }]}
          help="Your password is between 4 and 12 characters"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Input Text Label"
          name="text"
          className="!mb-0"
          validateStatus="error"
          hasFeedback
          help="Error message informing of a problem"
        >
          <Input placeholder="Type here" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          label={null}
          className="!mb-0"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item name="status" label={null} className="!mb-0">
          <Switch checked={checked} onChange={() => setChecked(!checked)} />
          <span className="ml-1">{checked ? "On" : "Off"}</span>
        </Form.Item>

        <Form.Item name="radio" label={null} className="!mb-0">
          <Radio.Group
            className="flex flex-col gap-2.5"
            options={[
              { value: 1, label: "Radio Selection 1" },
              { value: 2, label: "Radio Selection 2" },
              { value: 3, label: "Radio Selection 3" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="dropdown_option"
          label="Dropdown Title"
          className="!mb-0"
        >
          <Select
            options={[
              { value: "1", label: "Dropdown option 1" },
              { value: "2", label: "Dropdown option 2" },
              { value: "3", label: "Dropdown option 3" },
            ]}
          />
        </Form.Item>

        <div className="flex justify-between gap-2">
          <Button size="large" onClick={() => form.resetFields()}>Cancel</Button>
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default UserForm;
