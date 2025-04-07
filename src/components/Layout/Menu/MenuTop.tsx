import styles from "./Menu.module.scss"
import oakTreeLogo from "../../../assets/logos/oak-tree-logo.svg"
import iconCompany from "../../../assets/icons/icon-company.svg"
import iconSearch from "../../../assets/icons/icon-search.svg"

const MenuTop = () => {
  return (
    <div className={styles.topBlock}>
      <img src={oakTreeLogo} alt="OakTreeLogo" className={styles.logo} />

      <div className={styles.buttonsBlock}>
        <button className={styles.iconButton}>
          <img src={iconCompany} alt="Company" />
        </button>
        <button className={styles.iconButton}>
          <img src={iconSearch} alt="Search" />
        </button>
      </div>
    </div>
  )
}

export default MenuTop
