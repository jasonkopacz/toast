import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import useToggle from '../../hooks/use-toggle';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, selectedVariant }) {
  let Tag = ICONS_BY_VARIANT[selectedVariant]

  return ( 
    <div className={`${styles.toast} ${styles[selectedVariant]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton} onClick={() => (useToggle())}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
} 

export default Toast;
