import React, { useState, useEffect, useRef } from 'react';

import { ModalContent } from './ModalHelpers/ModalContent';
import { ModalWrapper } from './ModalHelpers/ModalWrapper';
import { ModalDialog } from './ModalHelpers/ModalDialog';
import { ModalBackdrop } from './ModalHelpers/ModalBackdrop';

const Modal = (props) => {
  const [elementMouseDown, setElementMouseDown] = useState(null);
  const refModalWrapper = useRef(null);
  const refModalDialog = useRef(null);

  useEffect(() => {
    if (props.hidden) {
      document.body.style.overflowY = 'auto';
    }
    else {
      document.body.style.overflowY = 'hidden';
    }
  }, [props.hidden]);

  function handleBackDropClick(e) {
    if (e.target !== elementMouseDown) {
      return;
    }

    e.stopPropagation();

    if (e.target === refModalWrapper.current || e.target === refModalDialog.current) {
      props.toggle();
    }
  }

  function handleBackDropMouseDown(e) {
    setElementMouseDown(e.target);
  }

  return (
    <React.Fragment>
      <ModalWrapper hidden={props.hidden} fadeIn={props.fadeIn} onClick={(e) => handleBackDropClick(e)} onMouseDown={(e) => handleBackDropMouseDown(e)} ref={refModalWrapper}>
        <ModalDialog ref={refModalDialog}>
          <ModalContent>{props.children}</ModalContent>
        </ModalDialog>
      </ModalWrapper>

      <ModalBackdrop hidden={props.hidden} />
    </React.Fragment>
  );
}

export default Modal;
