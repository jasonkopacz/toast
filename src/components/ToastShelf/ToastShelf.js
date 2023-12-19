import React from 'react';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastPlayground/ToastPlayground';

function ToastShelf() {
  const value = React.useContext(ToastContext)
  const toastRef = React.useRef();
  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {value.toasts.map((toast, index) => {
        return(
        <li className={styles.toastWrapper} key={index} ref={toastRef}>
          {toast}
        </li>
          )
})}
    </ol>
  );
}

export default React.memo(ToastShelf);
