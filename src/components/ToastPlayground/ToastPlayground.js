import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
export const ToastContext = React.createContext();

function ToastPlayground() {
  const id = React.useId();
  const [toasts, setToasts] = React.useState([])
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('')
  const [isHidden, setIsHidden] = React.useState(true)

  const value = {toasts, setToasts}

  function handleSubmit() {
    event.preventDefault()
    const uuid = crypto.randomUUID()
    const toast = <Toast message={message} selectedVariant={selectedVariant} id={uuid} />
    const newState = [...toasts, toast]
    setToasts(newState)
    setIsHidden(false)
    setMessage('')
    setSelectedVariant('notice')
  }

  return (
    <ToastContext.Provider value={value}>
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isHidden === false && <ToastShelf toasts={toasts} /> }
      <form onSubmit={handleSubmit}>  
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
              <Button aria-expanded={!isHidden}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </ToastContext.Provider>
  );
}

export default ToastPlayground;
