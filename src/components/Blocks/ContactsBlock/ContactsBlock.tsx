import { useState } from "react"
import styles from "./ContactsBlock.module.scss"
import iconPencil from "../../../assets/icons/icon-pencil.svg"
import iconCheck from "../../../assets/icons/icon-check.svg"
import iconCross from "../../../assets/icons/icon-cross.svg"

export const ContactsBlock = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [responsiblePerson, setResponsiblePerson] = useState("David Rosenberg")
  const [phoneNumber, setPhoneNumber] = useState("+1 702 555 2345")
  const [email, setEmail] = useState("david_rosenberg88@gmail.com")

  const handleSave = () => setIsEditing(false)
  const handleCancel = () => setIsEditing(false)

  return (
    <div className={`${styles.block} ${isEditing ? styles.editing : ""}`}>
      <div className={styles.blockHeader}>
        <h3 className={styles.blockTitle}>Contacts</h3>
        {isEditing ? (
          <div className={styles.editButtons}>
            <button className={styles.saveButton} onClick={handleSave}>
              <img src={iconCheck} alt="Save" className={styles.buttonIcon} />
              <span>Save changes</span>
            </button>
            <button className={styles.cancelButton} onClick={handleCancel}>
              <img src={iconCross} alt="Cancel" className={styles.buttonIcon} />
              <span>Cancel</span>
            </button>
          </div>
        ) : (
          <button
            className={styles.textIconButton}
            onClick={() => setIsEditing(true)}
          >
            <img src={iconPencil} alt="Pencil" className={styles.buttonIcon} />
            <span>Edit</span>
          </button>
        )}
      </div>
      <div className={styles.blockContent}>
        <div className={styles.contentLine}>
          <div className={styles.first}>Responsible person:</div>
          {isEditing ? (
            <input
              type="text"
              className={styles.editInput}
              value={responsiblePerson}
              onChange={(e) => setResponsiblePerson(e.target.value)}
            />
          ) : (
            <div className={styles.second}>{responsiblePerson}</div>
          )}
        </div>
        <div className={styles.contentLine}>
          <div className={styles.first}>Phone number:</div>
          {isEditing ? (
            <input
              type="text"
              className={styles.editInput}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          ) : (
            <div className={styles.second}>{phoneNumber}</div>
          )}
        </div>
        <div className={styles.contentLine}>
          <div className={styles.first}>E-mail:</div>
          {isEditing ? (
            <input
              type="email"
              className={styles.editInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <div className={styles.second}>{email}</div>
          )}
        </div>
      </div>
    </div>
  )
}
