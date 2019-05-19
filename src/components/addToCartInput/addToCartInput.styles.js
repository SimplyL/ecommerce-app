import styled from 'styled-components';

const InputContainer = styled.div`
  height: 40px;
`;
InputContainer.displayName = 'InputContainer';

const AmountInput = styled.input`
  height: 100%;
  max-width: 50px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #bdbdbd;
  border-right: none;
  outline: 0;
  font-size: 1.1em;
  text-align: center;
  box-sizing: border-box;

  &:focus {
    border-color: #3080e8;
  }
`;
AmountInput.displayName = 'AmountInput';

const AddButton = styled.button`
  padding: 0 20px 0 20px;
  background-color: #ffffff;
  color: #3080e8;
  border: 1px solid #3080e8;
  border-radius: 0 4px 4px 0;
  height: 100%;
  text-align: center;
  text-decoration: none;
  font-size: 1.1em;
  box-sizing: border-box;

  &:hover {
    color: #ffffff;
    background-color: #3080e8;
    cursor: pointer;
  }
`;
AddButton.displayName = 'AddButton';

export {
  InputContainer,
  AmountInput,
  AddButton,
};
