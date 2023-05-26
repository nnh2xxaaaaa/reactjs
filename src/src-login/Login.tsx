/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Home from "./Hello";

const HomeLogin = () => {
  const [textDefault, setTextDefault] = useState("Huy");
  const [inputText, setInputText] = useState("");
  const [pushArray, setPushArray] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextDefault(e.target.value);
  };

  const handleInputEnter = () => {
    setInputText(textDefault);
  };

  const addToArray = () => {
    setPushArray((prevArray) => [...prevArray, inputText]);
  };

  const deleteButton = (index: number) => {
    setPushArray((prevData) => {
      const pushArray = [...prevData];
      pushArray.splice(index, 1);
      return pushArray;
    });
  };

  const RenderValue = () => {
    if (pushArray.length > 0) {
      return (
        <div className="box-center">
          {pushArray.map((array, index) => (
            <div key={index} className="box-render">
              <p id="welcome-array">Hello welcome back:{array}</p>
              <button
                className="button-click"
                onClick={() => deleteButton(index)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>How to render </h1>;
    }
  };

  return (
    <div style={{ flex: 1, justifyContent: "center" }}>
      <h1 id="text-welcome">Login Form Name</h1>
      <input type="text" onChange={handleInput} className="input-add" />
      <Home names={inputText} />
      <button className="button-click" onClick={handleInputEnter}>
        Click Add Name
      </button>
      <button className="button-click" onClick={() => setInputText("")}>
        Reset Add Name
      </button>
      <button className="button-click" onClick={addToArray}>
        Push Array
      </button>
      <RenderValue />
    </div>
  );
};

export default HomeLogin;
