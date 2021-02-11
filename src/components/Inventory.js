import React from "react";

export default function Inventory(props) {
  return (
    <div>
      <h2>Inventory</h2>
      {props.inventory?.map((item) => (
        <div key={item} onClick={() => props.inventoryHandler(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}
