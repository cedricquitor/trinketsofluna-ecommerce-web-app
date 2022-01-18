import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col">
        {/* Top Part */}
        <div className="flex flex-row justify-between">
          <div>
            <h1>Left Side Brand</h1>
          </div>
          <div>
            <h1>Right Side Footer Navigation</h1>
          </div>
        </div>
        {/* Bottom Part */}
        <div className="flex flex-row justify-between">
          <div>
            <h1>Left Side Copyright</h1>
          </div>
          <div>
            <h1>Right Side Social Links</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
