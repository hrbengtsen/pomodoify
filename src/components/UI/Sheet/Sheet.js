import React, { useState, useEffect, useRef } from 'react';

import { SheetContent } from './SheetHelpers/SheetContent';
import { SheetWrapper } from './SheetHelpers/SheetWrapper';
import { SheetDialog } from './SheetHelpers/SheetDialog';
import { SheetBackdrop } from './SheetHelpers/SheetBackdrop';

const Sheet = (props) => {
  const [elementMouseDown, setElementMouseDown] = useState(null);
  const refSheetWrapper = useRef(null);
  const refSheetDialog = useRef(null);

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

    if (e.target === refSheetWrapper.current || e.target === refSheetDialog.current) {
      props.toggle();
    }
  }

  function handleBackDropMouseDown(e) {
    setElementMouseDown(e.target);
  }

  return (
    <>
      <SheetWrapper hidden={props.hidden} onClick={(e) => handleBackDropClick(e)} onMouseDown={(e) => handleBackDropMouseDown(e)} ref={refSheetWrapper}>
        <SheetDialog ref={refSheetDialog}>
          <SheetContent>{props.children}</SheetContent>
        </SheetDialog>
      </SheetWrapper>

      <SheetBackdrop hidden={props.hidden} />
    </>
  );
}

export default Sheet;
