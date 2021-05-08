import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Show me your Products",
      handler: props.actionProvider.handleProductList,

      id: 1,
    },
    { text: "Products by Price",
      handler: props.actionProvider.handlePricing,
    id: 2 },
    { text: "Products by use",       handler: props.actionProvider.handleUse,
id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
