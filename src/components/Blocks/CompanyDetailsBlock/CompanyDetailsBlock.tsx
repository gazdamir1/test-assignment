import { useState } from "react"
import styles from "./CompanyDetailsBlock.module.scss"
import iconPencil from "../../../assets/icons/icon-pencil.svg"
import iconCheck from "../../../assets/icons/icon-check.svg"
import iconCross from "../../../assets/icons/icon-cross.svg"
import { CustomSelectWithCheckboxes } from "./CustomSelectWithCheckboxes"

export const CompanyDetailsBlock = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [agreement, setAgreement] = useState("1624/2-24")
  const [date, setDate] = useState("03.12.2024")
  const [businessEntity, setBusinessEntity] = useState("Partnership")

  const [selectedCompanyTypes, setSelectedCompanyTypes] = useState<string[]>([
    "Funeral Home",
    "Logistics services",
  ])

  const companyTypeOptions = [
    "Funeral Home",
    "Logistics services",
    "Burial care Contractor",
  ]

  const handleSave = () => setIsEditing(false)
  const handleCancel = () => setIsEditing(false)

  return (
    <div className={`${styles.block} ${isEditing ? styles.editing : ""}`}>
      <div className={styles.blockHeader}>
        <h3 className={styles.blockTitle}>Company Details</h3>
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
          <div className={styles.first}>Agreement:</div>
          {isEditing ? (
            <>
              <input
                type="text"
                className={styles.editInput}
                value={agreement}
                onChange={(e) => setAgreement(e.target.value)}
              />
              <div className={styles.second}>Date:</div>
              <input
                type="text"
                className={styles.editInput}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </>
          ) : (
            <>
              <div className={styles.second}>{agreement}</div>
              <div className={styles.second}>/</div>
              <div className={styles.second}>{date}</div>
            </>
          )}
        </div>
        <div className={styles.contentLine}>
          <div className={styles.first}>Business entity:</div>
          {isEditing ? (
            <select
              className={styles.editSelect}
              value={businessEntity}
              onChange={(e) => setBusinessEntity(e.target.value)}
            >
              <option value="SoleProprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="CorporLimitedLiabilityCompanyation">
                Limited Liability Company
              </option>
            </select>
          ) : (
            <div className={styles.second}>{businessEntity}</div>
          )}
        </div>
        <div className={styles.contentLine}>
          <div className={styles.first}>Company type:</div>
          {isEditing ? (
            <CustomSelectWithCheckboxes
              options={companyTypeOptions}
              selectedOptions={selectedCompanyTypes}
              onSelectionChange={setSelectedCompanyTypes}
            />
          ) : (
            <div className={styles.second}>
              {selectedCompanyTypes.join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
