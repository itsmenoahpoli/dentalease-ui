import React from "react";

type Props = {
  isDisabled?: boolean;
};

const DEFAULT_IDLE_MS = 300000; // 5 minutes

export const AppIdleChecker: React.FC<Props> = (props) => {
  const idleTimer = React.useRef<NodeJS.Timeout | null>(null);

  const resetTimer = React.useCallback(() => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }

    idleTimer.current = setTimeout(() => {
      if (window.confirm("You have been idle for 5 minutes")) {
        resetTimer();
      }
    }, DEFAULT_IDLE_MS);
  }, [DEFAULT_IDLE_MS]);

  React.useEffect(() => {
    if (props.isDisabled) return;

    resetTimer();

    const monitoredEvents = ["mousemove", "keydown", "click", "touchstart"];
    monitoredEvents.forEach((event) => window.addEventListener(event, resetTimer));

    return () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }

      monitoredEvents.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [idleTimer]);

  return <></>;
};
