class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };
  error = () => {
    const message = this.createChatBotMessage("Sorry,I didn't get you");
    this.addMessageToState(message);
  };
  handleThanks = () => {
    const message = this.createChatBotMessage(
      "Thanks ! We will connect with you soon for test ride schedule. We are located at LG 33-34, ICON Leisure Valley ,GH02  Sector Techzone 4, Greater Noida West, Uttar Pradesh – 201306 Contact No.: 9811921189, 8860152724",
      {
        widget: "map",
      }
    );
    this.addMessageToState(message);
  };

  handleProductList = () => {
    const message = this.createChatBotMessage("Products we provide:", {
      widget: "products",
    });
    this.addMessageToState(message);
  };
  handleMainMenu = () => {
    const message = this.createChatBotMessage("Main Menu", {
      widget: "mainmenu",
    });
    this.addMessageToState(message);
  };

  handleUse = () => {
    const message = this.createChatBotMessage("Products based on Travel:", {
      widget: "use",
    });
    this.addMessageToState(message);
  };

  handleInfo = () => {
    const message = this.createChatBotMessage("Pls share your contact number");

    this.addMessageToState(message);
  };
  handleFeature = () => {
    const message = this.createChatBotMessage(" Ev4all", {
      widget: "features",
    });
    this.addMessageToState(message);
  };
  handleFinance = () => {
    const message = this.createChatBotMessage(
      " Available Finance options for you: ",
      {
        widget: "finance",
      }
    );
    this.addMessageToState(message);
  };
  handleMiso = () => {
    const message = this.createChatBotMessage("Please select an option", {
      widget: "misoItems",
    });

    this.addMessageToState(message);
  };
  handlePricing = () => {
    const message = this.createChatBotMessage("Here is the Pricing:", {
      widget: "pricing",
    });

    this.addMessageToState(message);
  };
  handleItemb = () => {
    const message = this.createChatBotMessage("Please select an option:", {
      widget: "item",
    });

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
