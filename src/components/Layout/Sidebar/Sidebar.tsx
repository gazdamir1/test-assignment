import styles from "./Sidebar.module.scss"
import iconCompany from "../../../assets/icons/icon-company-black.svg"
import iconContractor from "../../../assets/icons/icon-contractor.svg"
import iconAccount from "../../../assets/icons/icon-account.svg"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topBlock}>
        <h1>Oak Tree Cemetery</h1>
        <p>Process Manager</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomBlock}>
        <button className={styles.sidebarButton}>
          <img src={iconCompany} alt="Company" className={styles.buttonIcon} />
          <p>Organizations</p>
        </button>
        <button className={styles.sidebarButton}>
          <img
            src={iconContractor}
            alt="Contractor"
            className={styles.buttonIcon}
          />
          <p>Contractors</p>
        </button>
        <button className={styles.sidebarButton}>
          <img src={iconAccount} alt="Account" className={styles.buttonIcon} />
          <p>Clients</p>
        </button>
      </div>

      <div className={styles.footerText}>
        <p>All Funeral Services © 2015-2025</p>
      </div>
    </aside>
  )
}

export default Sidebar
