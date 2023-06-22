import { useEffect, useState } from "react";
import { Root } from "../Todo-list/Mounted/interFaceApi";

const DataConsole = () => {
  const [dataObject, setDataObject] = useState<Root>([]);

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
        setDataObject(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const dataName = ["Leanne Graham", "Clementina DuBuque", "Dennis Schulist "];
  useEffect(() => {
    dataObject.forEach((item, index) => {
      const k = Object.keys(item);
      const v = Object.values(item);
      const haskMap = new Map<string, any>();
      for (let i = 0; i < k.length; i++) {
        haskMap.set(k[i], v[i]);
      }

      for (const [k, v] of haskMap) {
        if (k === "name") {
          console.log(k);
        }
      }
      console.log(haskMap);
      console.log(haskMap);
    });
  }, [dataName]);
  

  return (
    <div>
      <h1>Ok</h1>
    </div>
  );
};

export default DataConsole;
