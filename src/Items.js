import React from "react";

import "./LinkList.css";

const Items = (props) => {
  const options = [
    {
      text: "Book a Test Ride",
      handler: props.actionProvider.handleInfo,

      id: 1,
    },
    { text: "Check Price", handler: props.actionProvider.handlePricing, id: 2 },
    {
      text: "Check Finance Option",
      handler: props.actionProvider.handleFinance,

      id: 3,
    },
    { text: "Main Menu", handler: props.actionProvider.handleMainMenu, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="link-list-item-url"
    >
      {option.text}
    </button>
  ));

  return <div className="link-list-item">{buttonsMarkup}</div>;
};

export default Items;
