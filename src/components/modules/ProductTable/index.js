import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function ProductTable({
  products,
  setProductList,
  handleDelete,
  handleEdit,
  productLink,
  isEditing,
  setIsEditing,
  editingProduct,
  setEditingProduct,
  handleView,
  isViewing,
  setIsViewing,
  productDetail,
  filterName,
}) {
  const [form] = Form.useForm();

  const [productUrl, setProductUrl] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "productLink",
      className: "product-img",
      render: (productLink) => <img src={productLink} alt="product-image" />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        {
          text: " Laptop & Macbook",
          value: " Laptop & Macbook",
        },
        {
          text: "TV - TV Screen",
          value: "TV - TV Screen",
        },
        {
          text: "Phone - Smart devices",
          value: "Phone - Smart devices",
        },
        {
          text: "Accessories",
          value: "Accessories",
        },
        {
          text: "Audio equipments",
          value: "Audio equipments",
        },
        {
          text: "Household appliances",
          value: "Household appliances",
        },
        {
          text: "Hi-End Gaming",
          value: "Hi-End Gaming",
        },
        {
          text: "Office equipment",
          value: "Office equipment",
        },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <GrView
            className="view-btn action-btn"
            onClick={() => handleView(record)}
          />
          <AiFillEdit
            className="edit-btn action-btn"
            onClick={() => {
              console.log(record);
              handleEdit(record);
              setEditingProduct(record);
              form.setFieldsValue({
                ID: record.ID,
                name: record.name,
                price: record.price,
                category: record.category,
                quantity: record.quantity,
                productLink: record.productLink,
              });
            }}
          />
          <MdDelete
            className="delete-btn action-btn"
            onClick={() => handleDelete(record.ID)}
          />
        </Space>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const handleImageChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setProductUrl(reader.result);
    };
  };

  const onFinish = (values) => {
    const newData = products.find((item) => item.ID === editingProduct.ID);

    newData.name = values.name;
    newData.price = values.price;
    newData.category = values.category;
    newData.quantity = values.quantity;

    newData.productLink = productUrl ? productUrl : newData.productLink;

    localStorage.setItem("products", JSON.stringify(products));
    setProductList(JSON.parse(localStorage.getItem("products")));
  };

  return (
    <>
      <Table columns={columns} onChange={onChange} dataSource={filterName} />
      <Modal
        title="Edit Product"
        visible={isEditing}
        okText="save"
        footer={null}
        onCancel={() => {
          setIsEditing(false);
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
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
                message: "Please add product image",
              },
            ]}
          >
            <Input
              type="file"
              value={productLink}
              onChange={handleImageChange}
            />
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
              <Select.Option value="TV - TV Screen">
                TV - TV Screen
              </Select.Option>
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
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Product Detail"
        visible={isViewing}
        okText="save"
        footer={null}
        onCancel={() => {
          setIsViewing(false);
        }}
      >
        <div className="product-view">
          <img src={productDetail.productLink} alt="product-img" />
          <div className="product-desc">
            <h3>{productDetail.name}</h3>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProductTable;
