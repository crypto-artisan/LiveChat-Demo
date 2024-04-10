import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";

// styles
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// components
import PageTitle from "../../../components/PageTitle";
import FileUploader from "../../../components/FileUploader";
import { FormInput } from "../../../components/";

const ProductEdit = () => {
  const [editorState, setEditorState] = useState<any>();
  const categories = [
    {
      label: "Shopping",
      options: [
        { value: "SH1", label: "Shopping 1" },
        { value: "SH2", label: "Shopping 2" },
        { value: "SH3", label: "Shopping 3" },
      ],
    },
    {
      label: "CRM",
      options: [
        { value: "CRM1", label: "Crm 1" },
        { value: "CRM2", label: "Crm 2" },
        { value: "CRM3", label: "Crm 3" },
        { value: "CRM4", label: "Crm 4" },
      ],
    },
    {
      label: "eCommerce",
      options: [
        { value: "E1", label: "eCommerce 1" },
        { value: "E2", label: "eCommerce 2" },
        { value: "E3", label: "eCommerce 3" },
        { value: "E4", label: "eCommerce 4" },
      ],
    },
  ];
  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required("Please enter Project Name"),
      reference: yup.string().required("Please enter Project Name"),
      summary: yup.string().required("Please enter Project Name"),
      price: yup.string().required("Please enter Project Name"),
      comment: yup.string().required("Please enter Project Name"),
      metatitle: yup.string().required("Please enter Project Name"),
      metakeywords: yup.string().required("Please enter Project Name"),
      metadescription: yup.string().required("Please enter Project Name"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  /**
   * On editor body change
   */
  const onEditorStateChange = (editorStates: any) => {
    setEditorState(editorStates);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/details" },
          {
            label: "Add / Edit Product",
            path: "/apps/ecommerce/details",
            active: true,
          },
        ]}
        title={"Add / Edit Product"}
      />

      <form onSubmit={handleSubmit(() => {})}>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">
                  General
                </h5>
                <FormInput
                  name="name"
                  label="Product Name"
                  placeholder="e.g : Apple iMac"
                  containerClass={"mb-3"}
                  register={register}
                  key="productname"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="reference"
                  label="Reference"
                  placeholder="e.g : Apple iMac"
                  containerClass={"mb-3"}
                  register={register}
                  key="reference"
                  errors={errors}
                  control={control}
                />
                <Form.Group className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName border border-1"
                    editorClassName="editorClassName px-2"
                    onEditorStateChange={onEditorStateChange}
                    editorStyle={{ minHeight: "150px" }}
                  />
                </Form.Group>

                <FormInput
                  type="textarea"
                  rows="3"
                  name="summary"
                  label="Product Summary"
                  placeholder="Please enter summary"
                  containerClass={"mb-3"}
                  register={register}
                  key="summary"
                  errors={errors}
                  control={control}
                />

                <Form.Group className="mb-3">
                  <Form.Label>Categories</Form.Label>
                  <Select
                    className="react-select react-select-container"
                    classNamePrefix="react-select"
                    options={categories}
                    id="product-category"
                  />
                </Form.Group>

                <FormInput
                  name="price"
                  label="Price"
                  placeholder="Enter amount"
                  containerClass={"mb-3"}
                  register={register}
                  key="price"
                  errors={errors}
                  control={control}
                />

                <div className="mb-3">
                  <label className="mb-2">Status</label>
                  <div className="d-flex flex-wrap">
                    <FormInput
                      type="radio"
                      name="radioInline"
                      label="Online"
                      value="option1"
                      containerClass={"me-2"}
                      defaultChecked
                      register={register}
                      key="inlineRadio1"
                      errors={errors}
                      control={control}
                    />
                    <FormInput
                      type="radio"
                      name="radioInline"
                      label="Offline"
                      value="option2"
                      containerClass={"me-2"}
                      register={register}
                      key="inlineRadio2"
                      errors={errors}
                      control={control}
                    />
                    <FormInput
                      type="radio"
                      name="radioInline"
                      label="Draft"
                      value="option3"
                      containerClass={"me-2"}
                      register={register}
                      key="inlineRadio3"
                      errors={errors}
                      control={control}
                    />
                  </div>
                </div>

                <FormInput
                  type="textarea"
                  rows="3"
                  name="comment"
                  label="Comment"
                  placeholder="Please enter comment"
                  containerClass={"mb-3"}
                  register={register}
                  key="comment"
                  errors={errors}
                  control={control}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">
                  Product Images
                </h5>
                <FileUploader />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">
                  Meta Data
                </h5>
                <FormInput
                  name="metatitle"
                  label="Meta title"
                  placeholder="Enter title"
                  containerClass={"mb-3"}
                  register={register}
                  key="metatitle"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="metakeywords"
                  label="Meta Keywords"
                  placeholder="Enter keywords"
                  containerClass={"mb-3"}
                  register={register}
                  key="metakeywords"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  type="textarea"
                  rows="5"
                  name="metadescription"
                  label="Meta Description"
                  placeholder="Please enter description"
                  containerClass={"mb-3"}
                  register={register}
                  key="metadescription"
                  errors={errors}
                  control={control}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="text-center mb-3">
              <button
                type="button"
                className="btn w-sm btn-light waves-effect me-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn w-sm btn-success waves-effect waves-light me-1"
              >
                Save
              </button>
              <button
                type="button"
                className="btn w-sm btn-danger waves-effect waves-light me-1"
              >
                Delete
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default ProductEdit;
