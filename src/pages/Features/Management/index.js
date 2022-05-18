import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { RiAddFill } from "react-icons/ri";
import ProductForm from "../../../components/modules/ProductForm";
import ProductTable from "../../../components/modules/ProductTable";

function Management() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productLink, setProductLink] = useState("");
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState({});
  const [isViewing, setIsViewing] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [search, setSearch] = useState("");
  const [filterName, setFilterName] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
  }, [productList]);

  useEffect(() => {
    const result = productList.filter((item) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterName(result);
  }, [search]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (e) => {
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setProductLink(fileReader.result);
    };
  };

  const onFinish = (values) => {
    const newProduct = { ...values, productLink };
    const newProductList = [...productList, newProduct];

    setProductList(newProductList);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleView = (item) => {
    console.log(item);
    setIsViewing(true);
    setProductDetail(item);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure to delete this product ?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setProductList((products) => {
          return products.filter((product) => product.ID !== id);
        });
      },
    });
  };

  const handleEdit = (item) => {
    console.log(item);
    setIsEditing(true);
  };

  const handleRemoveAll = () => {
    setProductList([]);
  };

  return (
    <>
      <Input onChange={(e) => setSearch(e.target.value)} />
      <Button onClick={showModal}>
        Add Product
        <RiAddFill />
      </Button>
      <Button onClick={handleRemoveAll}>Remove All</Button>
      <Modal
        className="manage-modal"
        title="Add Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          handleFileChange={handleFileChange}
        />
      </Modal>
      <ProductTable
        products={productList}
        setProductList={setProductList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        productLink={productLink}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
        handleView={handleView}
        isViewing={isViewing}
        setIsViewing={setIsViewing}
        productDetail={productDetail}
        filterName={filterName}
      />
    </>
  );
}

export default Management;
