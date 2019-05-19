import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: #ffffff;
`;
Container.displayName = 'Container';

const ChatContainer = styled.div`
  width: 20em;
  height: 25em;
  border: 1px solid #888888;
  position: relative;
  border-radius: 4px;
  padding: 50px 0 50px 0;
`;
ChatContainer.displayName = 'ChatContainer';

const ChatButton = styled.button`
  height: 1.2em;
  width: 1.2em;
  background-color: #3080e8;
  color: #ffffff;
  font-size: 3em;
  border: none;
  border-radius: 50%;

  &:hover {
    background-color: #1767cf;
    cursor: pointer;
  }
`;
ChatButton.displayName = 'ChatButton';

const TextInput = styled.input`
  position: absolute;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  font-size: 1em;
  border: 1px solid #888888;
  border-radius: 0 0 4px 4px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  height: 40px;
  bottom: 0;
  width: 100%;
`;
TextInput.displayName = 'TextInput';

const CloseIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2em;
  font-weight: 600;
  color: #666666;

  &:hover {
    cursor: pointer;
    color: #333333;
  }
`;
CloseIcon.displayName = 'CloseIcon';

const ChatArea = styled.div`
  height:100%;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: min-content;
  overflow-y: scroll;
  padding: 0 10px 0 10px
`;
ChatArea.displayName = 'ChatArea';

const Message = styled.div`
  margin-bottom: 10px;
  max-width: 70%;
  padding: 5px 10px 5px 10px;
  height: fit-content;

  ${({ type }) => type === 'system' ?
    `
    border-radius: 10px 20px 20px 5px;
    background-color: #3080e8;
    justify-self: start;
    color: #ffffff;
  ` :
    `
    border-radius: 20px 10px 5px 20px;
    background-color: #999999;
    color: #ffffff;
    justify-self: end;
  `};
`;
Message.displayName = 'Message';

export {
  Container,
  ChatContainer,
  ChatButton,
  TextInput,
  CloseIcon,
  ChatArea,
  Message,
};
