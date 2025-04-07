import styles from "./Menu.module.scss"
import logo from "../../../assets/logos/logo.svg"
import iconCase from "../../../assets/icons/icon-case.svg"
import iconSearch from "../../../assets/icons/icon-search.svg"

const MenuTop = () => {
  return (
    <div className={styles.topBlock}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.buttonsBlock}>
        <button className={styles.iconButton}>
          <img src={iconCase} alt="Case" />
        </button>
        <button className={styles.iconButton}>
          <img src={iconSearch} alt="Search" />
        </button>
      </div>
    </div>
  )
}

export default MenuTop
