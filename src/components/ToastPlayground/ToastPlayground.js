import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const id = React.useId();

  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('')

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {selectedVariant && <Toast message={message} selectedVariant={selectedVariant} /> }

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor={`message-${id}`}
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id={`message-${id}`} value={message} onChange={(e) => (setMessage(e.target.value))} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, i) => (
              <div key={i}>
                <label htmlFor={`${variant}-${id}`}>
                <input
                  id={`${variant}-${id}`}
                  key={id}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={variant == selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                />
                {variant}
              </label>
            </div>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
