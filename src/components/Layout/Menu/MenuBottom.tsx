import styles from "./Menu.module.scss"
import iconGear from "../../../assets/icons/icon-gear.svg"
import iconExit from "../../../assets/icons/icon-exit.svg"

const MenuBottom = () => {
  return (
    <div className={styles.bottomBlock}>
      <div className={styles.buttonsBlock}>
        <button className={styles.iconButton}>
          <img src={iconGear} alt="Gear" />
        </button>
        <button className={styles.iconButton}>
          <img src={iconExit} alt="Exit" />
        </button>
      </div>
    </div>
  )
}

export default MenuBottom
