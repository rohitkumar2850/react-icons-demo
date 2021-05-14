import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");
function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log("User is Idle");
    setModelIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };
  const stayActive = () => {
    setModelIsOpen(false);
    clearTimeout(sessionTimeoutRef.current)
    console.log("User is active");
  };
  const logOut = () => {
    setModelIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current)
    console.log("User has logged out");
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Rohit</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modelIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}

export default IdleTimerContainer;
