import React, { useEffect, useState } from "react";
import { Handle } from "./InterFaces";
import { Button, Checkbox, Form, Input } from "antd";

const datdInter = [
  "Cash",
  "Home",
  "Bank",
  "ReNameBank",
  "ValueBank",
  "Exchange",
  "ExchangeValueBank",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
  "InterFaces",
];
const color = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "black",
  "white",
  "pink",
  "asterisk",
];
const password = [
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
  'abcdefghijkl',
]



const Home = () => {
  const [data, setData] = useState<Handle[]>([]);
  const [showData, setShowData] = useState(false);
  const [matchingData, setMatchingData] = useState<Handle[]>([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const HandeDataImport = async () => {
      const fetchedData = await getData();
      const updatedData = fetchedData.map((e: any, i: number) => ({
        ...e,
        inter: datdInter[i],
        color: color[i],
        password:password[i]
      }));
  
      setData([...updatedData]);
      setShowData(true);
    };
    HandeDataImport();
  }, []);
  const onFinish = (values: any) => {
    if (data.length > 0) {
      const filteredData = data.filter((item) => item.name === values.username && item.password === values.password );
      setMatchingData(filteredData);
    } else {
      setMatchingData([])
    }
  };
  console.log(data)

  const onFinishFailed = (errorInfo: any) => {};
  return (
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {matchingData.length > 0 ? (
        <div>
          {matchingData.map((item, key) => (
            <div key={key}>
              <h1> Name: {item.name}</h1>
              <h1> Email: {item.email}</h1>
              <h1> Address: {item.address.city}</h1>
              <h1> password: {item.password}</h1>
            </div>
          ))}
        </div>
      ) : (
        <h1>Emtys</h1>
      )}
    </div>
  );
};

export default Home;
