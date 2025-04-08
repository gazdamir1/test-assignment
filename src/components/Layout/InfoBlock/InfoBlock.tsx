import styles from "./InfoBlock.module.scss"
import iconPencil from "../../../assets/icons/icon-pencil.svg"
import iconDelete from "../../../assets/icons/icon-delete.svg"
import iconArrow from "../../../assets/icons/icon-arrow.svg"
import { useState } from "react"
import { DialogName } from "../../Dialog boxes/OrganizationsName/DialogName"
import { DialogRemove } from "../../Dialog boxes/RemoveOrganization/DialogRemove"
import { CompanyDetailsBlock } from "../../Blocks/CompanyDetailsBlock/CompanyDetailsBlock"
import { ContactsBlock } from "../../Blocks/ContactsBlock/ContactsBlock"
import { PhotosBlock } from "../../Blocks/PhotosBlock/PhotosBlock"

const InfoBlock = () => {
  const [isNameDialogOpen, setIsNameDialogOpen] = useState(false)
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

  return (
    <div className={styles.container}>
      <button className={styles.arrow}>
        <img src={iconArrow} alt="Arrow" />
      </button>

      <div className={styles.infoBlock}>
        <div className={styles.header}>
          <h1 className={styles.title}>Eternal Rest Funeral Home</h1>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.iconButton}
              onClick={() => setIsNameDialogOpen(true)}
            >
              <img src={iconPencil} alt="Pencil" />
            </button>

            <button
              className={styles.iconButton}
              onClick={() => setIsRemoveDialogOpen(true)}
            >
              <img src={iconDelete} alt="Delete" />
            </button>
          </div>
        </div>

        <DialogName
          isOpen={isNameDialogOpen}
          onClose={() => setIsNameDialogOpen(false)}
          title="Edit Company Details"
        />

        <DialogRemove
          isOpen={isRemoveDialogOpen}
          onClose={() => setIsRemoveDialogOpen(false)}
          title="Remove Organization"
        />

        <div className={styles.blocksContainer}>
          <CompanyDetailsBlock />
          <ContactsBlock />
          <PhotosBlock />
        </div>
      </div>
    </div>
  )
}

export default InfoBlock
