import styles from "./InfoBlock.module.scss"
import iconPencil from "../../../assets/icons/icon-pencil.svg"
import iconDelete from "../../../assets/icons/icon-delete.svg"
import firstPhoto from "../../../assets/photos/FirstPhoto.png"
import secondPhoto from "../../../assets/photos/SecondPhoto.png"
import thirdPhoto from "../../../assets/photos/ThirdPhoto.png"
import iconArrow from "../../../assets/icons/icon-arrow.svg"

const InfoBlock = () => {
  return (
    <div className={styles.container}>
      <button className={styles.arrow}>
        <img src={iconArrow} alt="Arrow" />
      </button>

      <div className={styles.infoBlock}>
        <div className={styles.header}>
          <h1 className={styles.title}>Eternal Rest Funeral Home</h1>
          <div className={styles.buttonsContainer}>
            <button className={styles.iconButton}>
              <img src={iconPencil} alt="Pencil" />
            </button>
            <button className={styles.iconButton}>
              <img src={iconDelete} alt="Delete" />
            </button>
          </div>
        </div>

        <div className={styles.blocksContainer}>
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>Company Details</h3>
              <button className={styles.textIconButton}>
                <img
                  src={iconPencil}
                  alt="Pencil"
                  className={styles.buttonIcon}
                />
                <span>Edit</span>
              </button>
            </div>
            <div className={styles.blockContent}>
              <div className={styles.contentLine}>
                <div className={styles.first}>Agreement:</div>
                <div className={styles.second}>1624/2-24</div>
                <div className={styles.second}>/</div>
                <div className={styles.second}>03.12.2024</div>
              </div>
              <div className={styles.contentLine}>
                <div className={styles.first}>Business entity:</div>
                <div className={styles.second}>Partnership</div>
              </div>
              <div className={styles.contentLine}>
                <div className={styles.first}>Company type:</div>
                <div className={styles.second}>
                  Funeral Home, Logistics services
                </div>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>Contacts</h3>
              <button className={styles.textIconButton}>
                <img
                  src={iconPencil}
                  alt="Pencil"
                  className={styles.buttonIcon}
                />
                <span>Edit</span>
              </button>
            </div>
            <div className={styles.blockContent}>
              <div className={styles.contentLine}>
                <div className={styles.first}>Responsible person:</div>
                <div className={styles.second}>David Rosenberg</div>
              </div>
              <div className={styles.contentLine}>
                <div className={styles.first}>Phone number:</div>
                <div className={styles.second}>+1 702 555 2345</div>
              </div>
              <div className={styles.contentLine}>
                <div className={styles.first}>E-mail:</div>
                <div className={styles.second}>david_rosenberg88@gmail.com</div>
              </div>
            </div>
          </div>

          <div className={styles.blockPhotos}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>Photos</h3>
              <button className={styles.textIconButton}>
                <img
                  src={iconPencil}
                  alt="Pencil"
                  className={styles.buttonIcon}
                />
                <span>Add</span>
              </button>
            </div>

            <div className={styles.photosContainer}>
              <img
                src={firstPhoto}
                alt="photo"
                className={styles.photoPlaceholder}
              />
              <img
                src={secondPhoto}
                alt="photo"
                className={styles.photoPlaceholder}
              />
              <img
                src={thirdPhoto}
                alt="photo"
                className={styles.photoPlaceholder}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock
