import React, { useState } from "react";
import "./Calculator.css";

export function Calculator() {
  const element = [
    { method: function handleReset() {}, label: "AC" },
    {
      method: function percent(number) {
        return number / 100;
      },
      label: "%"
    },
    { label: "/", value: "÷" },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: "×", value: "*" },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: "-", value: "-" },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: "+", value: "+" },
    { label: 0, value: 0 },
    { label: ".", value: "." },
    { label: "=", value: "=" }
  ];
  const [show, setShow] = useState(null);

  function handleReset() {
    setShow([]);
  }

  return (
    <div>
      <p>{show}</p>
      {element.map((item, index) => {
        return <div key={index}>{item.label}</div>;
      })}
    </div>
  );
}
