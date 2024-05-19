import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  React.useEffect(() => {
    const listener = (event) => {
      if (event.key === "Escape") {
        setToastList([]);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toastList, setToastList }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
