/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Handle } from "./InterFaces";
import { Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

const Hello = () => {
  const [data, setData] = useState<Handle[]>([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  const hi = data.map((item) => {
    const hihi = data.map((item) => {
      return { key: item.id, label: item.name };
    });
    const items = [...hihi];
    return (
      <div key={item.id}>
        <Layout key={item.id} hasSider>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[item.id.toString()]}
              items={items}
            />
          </Sider>
        </Layout>
        <div>Ok</div>
      </div>
    );
  });

  return <div>{hi}</div>;
};

export default Hello;
