import { Button, Form, Input, InputNumber, Select } from "antd";
import React from "react";

function ProductForm(props) {
  const onFinish = props.onFinish;
  const onFinishFailed = props.onFinishFailed;
  const handleFileChange = props.handleFileChange;

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          name="ID"
          rules={[
            {
              required: true,
              message: "Please enter product ID",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter product name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please add product image",
            },
          ]}
        >
          <Input type="file" onChange={handleFileChange} />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please enter product price",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please select product category",
            },
          ]}
        >
          <Select>
            <Select.Option value="Laptop & Macbook">
              Laptop & Macbook
            </Select.Option>
            <Select.Option value="TV - TV Screen">TV - TV Screen</Select.Option>
            <Select.Option value="Phone - Smart devices">
              Phone - Smart devices
            </Select.Option>
            <Select.Option value="Accessories">Accessories</Select.Option>
            <Select.Option value="Audio equipments">
              Audio equipments
            </Select.Option>
            <Select.Option value="Household appliances">
              Household appliances
            </Select.Option>
            <Select.Option value="Hi-End Gaming">Hi-End Gaming</Select.Option>
            <Select.Option value="Office equipment">
              Office equipment
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            {
              required: true,
              message: "Please enter product price",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ProductForm;
