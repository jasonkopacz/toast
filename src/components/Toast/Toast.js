import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

import { ToastContext } from '../ToastPlayground/ToastPlayground';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function handleClick(toasts, setToasts, id) {
  const nextToasts = toasts.filter((toast) => (
    toast.props.id !== id
  ));
  setToasts(nextToasts)
}
  
  function Toast({ message, selectedVariant, id }) {
    const value = React.useContext(ToastContext)
    let Tag = ICONS_BY_VARIANT[selectedVariant]

  return ( 
    <div className={`${styles.toast} ${styles[selectedVariant]}`} >
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        {message}
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </p>
      <button className={styles.closeButton} 
      onClick={() => handleClick(value.toasts, value.setToasts, id)}
      aria-label='Dismiss message' aria-live='off'>
        <X size={24} />
      </button>
    </div>
  );
} 

export default Toast;
