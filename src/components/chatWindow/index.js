import React, { Component } from 'react';
import {
  Container,
  ChatContainer,
  ChatButton,
  TextInput,
  CloseIcon,
  ChatArea,
  Message,
} from './chatWindow.styles';

const responseMessage = {
  text: 'Hello, currently we are closed, please get back to later',
  type: 'system',
}

const renderMessage = (message, index) => {
  const { type, text } = message;
  return (
    <Message type={type} key={index}>
      {text}
    </Message>
  );
};

class ChatWindow extends Component {
  state = {
    isOpen: false,
    inputValue: '',
    messages: [responseMessage],
  }

  toggleChatWindow = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange = evt => this.setState({ inputValue: evt.target.value });

  handleSubmit = evt => {
    if (evt.key === 'Enter' && this.state.inputValue) {
      const { inputValue, messages } = this.state;

      this.setState({
        messages: [
          ...messages,
          {
            text: inputValue,
            type: 'user'
          },
          responseMessage,
        ],
        inputValue: '',
      });
    }
  }

  render() {
    const { isOpen, inputValue, messages } = this.state;

    return (
      <Container>
        {!isOpen && <ChatButton onClick={this.toggleChatWindow}>+</ChatButton>}
        {isOpen && (
          <ChatContainer>
            <CloseIcon onClick={this.toggleChatWindow}>X</CloseIcon>
            <ChatArea>
              {messages.map(renderMessage)}
            </ChatArea>
            <TextInput
              value={inputValue}
              onChange={this.handleChange}
              onKeyPress={this.handleSubmit}
            />
          </ChatContainer>
        )}
      </Container>
    );
  }
};

export default ChatWindow;
