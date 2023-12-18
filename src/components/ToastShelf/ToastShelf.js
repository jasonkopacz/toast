import React from 'react';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
      <li className={styles.toastWrapper} key={index}>
          {toast}
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
