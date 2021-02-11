import React, { useState } from "react";
import Cart from "../components/Cart";
import Inventory from "../components/Inventory";

export default function Store() {
  const [inventory, setInventory] = useState(["Monopoly", "Catan", "BB"]);
  const [cart, setCart] = useState(["old flyer"]);

  const inventoryHandler = (item) => {
    const newInv = inventory.filter((currentInv) => currentInv !== item);
    setInventory((prevInv) => {
        return newInv;
    });
    setCart((prevCart) => [...prevCart, item]);
  };

  const returnToShelf = (item) => {
    setInventory([...inventory, item]);
    setCart(cart.filter((cartItems) => cartItems !== item));
  };

  return (
    <div>
      <h1>RTS Labs Store</h1>
      <div className="sidebyside">
        <Cart cart={cart} returnToShelf={returnToShelf} />
        <Inventory inventory={inventory} inventoryHandler={inventoryHandler} />
      </div>
    </div>
  );
}
