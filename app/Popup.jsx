import styles from "./Popup.module.css";

function Popup({ children, onClose }) {
  return (
    <div className={styles.modalBg} onClick={onClose}>
      <figure className={styles.fullInfo} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeIcon} onClick={onClose}>
          &#10005;
        </button>
        {children}
      </figure>
    </div>
  );
}

export default Popup;
