import styles from "./DialogRemove.module.scss"

type DialogProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export const DialogRemove = ({ isOpen, onClose }: DialogProps) => {
  if (!isOpen) return null

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialog}>
        <div className={styles.dialogHeader}>
          <h3 className={styles.dialogTitle}>Remove Organization?</h3>
        </div>

        <div className={styles.warningText}>
          Are you sure you want to remove this organization?
        </div>

        <div className={styles.buttonsRow}>
          <button className={styles.cancelButton} onClick={onClose}>
            No
          </button>
          <button className={styles.deleteButton} onClick={onClose}>
            Yes, remove
          </button>
        </div>
      </div>
    </div>
  )
}
