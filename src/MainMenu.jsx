import React from "react";

import "./Options.css";

const MainMenu = (props) => {
  const options = [
    {
      text: "Products",
      handler: props.actionProvider.handleProductList,

      id: 1,
    },
    { text: "Book a Test Ride",
      handler: props.actionProvider.handleInfo,
    id: 2 },
    { text: "Call me back",       handler: props.actionProvider.handleInfo,
id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default MainMenu;
