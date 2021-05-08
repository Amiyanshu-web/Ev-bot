import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./Options";
// import Quiz from "./Quiz";
import Try from "./Try";
import Use from "./Use";
import MainMenu from "./MainMenu";
import Items from "./Items";
import Itemsb from "./Itemsb";
import Ev4allAvatar from "./Ev4allAvatar";
import Pricing from "./Pricing";
import LinkList from "./LinkList";

const config = {
  botName: "Ev4all Chatbot",
  initialMessages: [
    createChatBotMessage(`Hi, Welcome to ev4all, how can I help you?`, {
      widget: "options",
    }),
  ],
  // Defines an object of custom components that will replace the stock chatbot components.
  customComponents: {
    //    // Replaces the default header
    //   // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
    //   // Replaces the default bot avatar
    botAvatar: (props) => <Ev4allAvatar {...props} />,
    //   // Replaces the default bot chat message container
    //   botChatMessage: (props) => <CustomChatMessage {...props} />,
    //   // Replaces the default user icon
    //   userAvatar: (props) => <MyUserAvatar {...props} />,
    //   // Replaces the default user chat message
    //   userChatMessage: (props) => <MyUserChatMessage {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#EEEEEE",
    },
    chatButton: {
      backgroundColor: "#3498D8",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "mainmenu",
      widgetFunc: (props) => <MainMenu {...props} />,
    },
    {
      widgetName: "products",
      widgetFunc: (props) => <Try {...props} />,
    },
    {
      widgetName: "misoItems",
      widgetFunc: (props) => <Items {...props} />,
    },
    {
      widgetName: "item",
      widgetFunc: (props) => <Itemsb {...props} />,
    },
    {
      widgetName: "pricing",
      widgetFunc: (props) => <Pricing {...props} />,
    },
    {
      widgetName: "use",
      widgetFunc: (props) => <Use {...props} />,
    },
    {
      widgetName: "features",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Feature",
            url: "#",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "finance",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Finance Option",
            url: "#",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "map",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "LOCATION",
            url: "#",
            id: 1,
          },
        ],
      },
    },
  ],
};

export default config;
