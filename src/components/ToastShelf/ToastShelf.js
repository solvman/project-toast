import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastList, setToastList } = React.useContext(ToastContext);

  function handleDismiss(id) {
    setToastList((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList?.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            id={toast.id}
            handleDismiss={handleDismiss}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
