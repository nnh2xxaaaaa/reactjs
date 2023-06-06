/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Root } from "./interFaceApi";

const Content = () => {
  const [data, setData] = useState<Root>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>This is content Hide</p>
      {data && (
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address.city}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Content;
