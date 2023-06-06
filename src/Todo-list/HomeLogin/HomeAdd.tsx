import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import "../../App.css";
import { DeleteOutlined } from "@ant-design/icons";

interface Root {
  username: string;
  password: string;
  confirmpassword: string;
  remember: boolean;
}

const HomeAdd = () => {
  const [valueInput, setValueInput] = useState<Root[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [passwordError, setPasswordError] = useState<string>("");

  const onFinish = (values: any) => {
    if (editIndex !== null) {
      setValueInput((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[editIndex] = values;
        console.log(updatedValues);
        return updatedValues;
      });

      setEditIndex(null); // Reset editIndex to null after editing
    } else {
      // Adding new information
      if (values.password === values.confirmpassword) {
        setValueInput((prevValues) => [...prevValues, values]);
        setPasswordError(""); // Clear password error if there was any
      } else {
        setPasswordError("Please check your password");
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const deleteInfor = (index: number) => {
    setValueInput((prevData) => {
      const pushArray = [...prevData];
      pushArray.splice(index, 1);
      return pushArray;
    });
  };

  const Render = () => {
    return (
      <>
        <div className="InterCards">
          {valueInput.map((item, index) => {
            return (
              <div key={index} id="Onecard">
                <h3>UserName: {item.username}</h3>
                <h3>Password: {item.password}</h3>
                <div>
                  <Space wrap>
                    <Button type="primary" onClick={() => deleteInfor(index)}>
                      Delete Info
                      <DeleteOutlined />
                    </Button>
                  </Space>
                  <Space wrap>
                    <Button
                      type="primary"
                      onClick={() => setEditIndex(index)}
                    >
                      Edit Info
                    </Button>
                  </Space>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onValuesChange={() => setPasswordError("")} // Clear password error on input change
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add user
            </Button>
          </Form.Item>

          {passwordError && (
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <div className="ant-form-item-explain-error">{passwordError}</div>
            </Form.Item>
          )}
        </Form>
      </div>

      <div className="Card">
        <Render />
      </div>
    </div>
  );
};

export default HomeAdd;
