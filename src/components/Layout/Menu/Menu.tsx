import styles from "./Menu.module.scss"
import MenuTop from "./MenuTop"
import MenuBottom from "./MenuBottom"

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <MenuTop />
      <MenuBottom />
    </nav>
  )
}

export default Menu
