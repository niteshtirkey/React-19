import { useState } from "react";

const ShopingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((prevItem) => [...prevItem, newItem]);

    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shoping List.</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Item name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={quantity}
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Qunatity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopingList;
