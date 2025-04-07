import styles from "./MainLayout.module.scss"
import Menu from "./Menu/Menu"
import Sidebar from "./Sidebar/Sidebar"
import InfoBlock from "./InfoBlock/InfoBlock"

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Menu />
      <Sidebar />
      <InfoBlock />
    </div>
  )
}

export default MainLayout
