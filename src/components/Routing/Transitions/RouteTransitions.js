import React, { cloneElement } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const childFactoryCreator = (props) => child => cloneElement(child, props);

function RouteTransitions({ children, locationKey, transition = 'slideUp', duration = 400}) {

  function toggleOverflow(bool) {
    if (bool) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <TransitionGroup childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}>
      <CSSTransition key={locationKey} classNames={transition} timeout={duration} onEntering={() => toggleOverflow(true)} onEntered={() => toggleOverflow(false)}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default RouteTransitions;
