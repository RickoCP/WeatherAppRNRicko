import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import LoginComponent from '@presentation/components/atomicDesign/organisms/loginComponent/LoginComponent';

afterEach(cleanup);

it('renders login', () => {
  const userId = 'hi';
  const userPw = 'qwerty1234';
  let submittedData = {};
  const handleClickLogin = jest.fn(
    (data: {userId: string; userPw: string}) => (submittedData = data),
  );
  render(<LoginComponent handleClickLogin={handleClickLogin} />);
  const {getByText, getByPlaceholderText} = screen;
  const button = getByText(/LOGIN/i);

  fireEvent.changeText(getByPlaceholderText(/Username/i), userId);
  fireEvent.changeText(getByPlaceholderText(/Password/i), userPw);
  fireEvent.press(button);

  expect(submittedData).toEqual({userId, userPw});
  expect(handleClickLogin).toHaveBeenCalledWith({userId, userPw});
  expect(handleClickLogin).toHaveBeenCalledTimes(1);
});
