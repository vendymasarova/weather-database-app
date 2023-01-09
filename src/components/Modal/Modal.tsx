
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { StyledModal } from './Modal-styles';

interface Props {
  text: string
}

const Modal = ({ text }: Props) => {
  return (
    <StyledModal>
      <h2>{text}</h2>
    </StyledModal>
  );
};

export default Modal;
