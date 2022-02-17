import React from "react";

const ShoppingCart = () => {
  return (
    <div>
      <h1>ShoppingCart</h1>
      <table className="mx-auto mt-8 table-auto">
        <thead className="font-playfair">
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          <tr>
            <td>Test Product</td>
            <td>123</td>
            <td>2</td>
            <td>246</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
