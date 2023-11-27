import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ModalComp from '@presentation/components/atomicDesign/molecules/modalComp/ModalComp';

test('render modal Properly', () => {
  const isShow = true;

  render(<ModalComp isShow={isShow} />);

  const {getByTestId} = screen;

  const modal = getByTestId('modal_comp');
  expect(modal.props.visible).toEqual(isShow);
});

test('render show modal Properly', () => {
  const isShow = true;
  const text = 'test';

  render(<ModalComp isShow={isShow} text={text} />);

  const {getByTestId, getByText} = screen;

  const modal = getByTestId('modal_comp');
  const textview = getByText(text);
  expect(modal.props.visible).toEqual(isShow);
  expect(textview.props.children).toEqual(text);
});
