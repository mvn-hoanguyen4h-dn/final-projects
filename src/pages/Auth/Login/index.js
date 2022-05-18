import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { LockOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  let { login } = useAuth();

  const onFinish = (values) => {
    console.log(values);
    setEmail(values.email);
    setPassword(values.password);
  };

  return (
    <>
      <Form
        className="form-login"
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 className="login-title">Login</h2>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<AiOutlineMail className="site-form-item-icon" />}
            placeholder="Your email ..."
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Your password ..."
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => login({ email }, { password })}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
