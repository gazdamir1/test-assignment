import styles from "./DialogName.module.scss"

type DialogProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: React.ReactNode
}

export const DialogName = ({ isOpen, onClose }: DialogProps) => {
  if (!isOpen) return null

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialog}>
        <div className={styles.dialogHeader}>
          <h3 className={styles.dialogTitle}>Edit Company Details</h3>
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.dialogInput}
            defaultValue="Eternal Rest Funeral Home"
            placeholder="Enter company name"
          />
        </div>

        <div className={styles.buttonsRow}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={onClose}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
