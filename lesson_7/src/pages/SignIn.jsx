import React from "react";
import { Button, Form, Typography } from "antd";
import InputStyled from "../components/InputStyled";
import InputPasswordStyled from "../components/InputPasswordStyled";

const SignIn = ({ setSignUp }) => {
  const [form] = Form.useForm();

  const onFinish = () => {}


  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center p-5">
      <Form
        form={form}
        name="login"
        layout="vertical"
        className="w-[380px]"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Typography.Title level={4} className="text-center mb-8">
          Welcome back!
        </Typography.Title>

        <Form.Item
          label="Email hoặc số điện thoại"
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email hoặc số điện thoại",
            },
            {
              validator: (_, value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;

                if (
                  emailRegex.test(value) ||
                  phoneRegex.test(value.replace(/\s/g, ""))
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Email hoặc số điện thoại không hợp lệ")
                );
              },
            },
          ]}
        >
          <InputStyled placeholder="youremail@gmail.com hoặc 0901234567" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
          ]}
        >
          <InputPasswordStyled placeholder="Nhập mật khẩu của bạn" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full !h-12 text-base font-medium"
          >
            Sign In
          </Button>
        </Form.Item>

        <div className="text-center text-sm text-gray-600">
          Not a user?{" "}
          <a
            onClick={() => setSignUp(true)}
            className="text-gray-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
