class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowercase.includes(" ")) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.error();
    }

    if (lowercase.length === 10) {
      this.actionProvider.handleThanks();
    }
  }
}

export default MessageParser;
