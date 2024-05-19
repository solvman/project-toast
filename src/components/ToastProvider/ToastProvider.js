import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  useEscapeKey(() => setToastList([]));

  return (
    <ToastContext.Provider value={{ toastList, setToastList }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
