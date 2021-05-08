import React from "react";
import "./try.css";
import "./Options.css";

const Pricing = (props) => {
  const options = [
    {
      text: "Miso:        Rs.40,000",
      handler: props.actionProvider.handleItemb,
      image: "http://ev4all.in/wp-content/uploads/2020/07/image15.jpg",

      id: 1,
    },
    {
      text: "Ryder:       Rs.60,000",
      handler: props.actionProvider.handleItemb,
      image: "http://ev4all.in/wp-content/uploads/2020/07/r30-second-panel.png",

      id: 2,
    },
    {
      text: "Astrid Lite:     Rs.80,000",
      handler: props.actionProvider.handleItemb,
      image:
        "http://ev4all.in/wp-content/uploads/2020/07/image16-e1595765206119.jpg",

      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="container2">
      <img src={option.image} alt="product" className="iconDetails"></img>
      <h4>{option.text}</h4>
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Pricing;
