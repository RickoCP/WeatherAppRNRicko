import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TextInputComponent} from '@presentation/components/atomicDesign/atoms/textInput/textInputComponent';

test('render text input Properly', () => {
  const variant = 'primary1';
  const size = 'largeTitle';
  const value = 'value test';
  const placeholder = 'placeholder';

  render(
    <TextInputComponent
      variant={variant}
      size={size}
      value={value}
      placeholder={placeholder}
    />,
  );

  const {getByPlaceholderText} = screen;

  const textInput = getByPlaceholderText(/placeholder/i);
  expect(textInput.props.placeholder).toEqual(placeholder);
  expect(textInput.props.value).toEqual(value);
  // expect(textInput.props.style).toMatchObject([
  //   {
  //     borderColor: '#bbbbbb',
  //     borderWidth: 3,
  //     color: '#000000',
  //     borderRadius: 15,
  //     height: 50,
  //     marginBottom: 10,
  //     paddingLeft: 10,
  //     paddingRight: 10,
  //   },
  //   {
  //     color: '#000',
  //   },
  //   {
  //     fontFamily: 'Roboto-Black',
  //     fontSize: 40,
  //   },
  //   {},
  // ]);
});
