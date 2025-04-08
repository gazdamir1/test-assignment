import styles from "./PhotosBlock.module.scss"
import iconPencil from "../../../assets/icons/icon-pencil.svg"
import firstPhoto from "../../../assets/photos/FirstPhoto.png"
import secondPhoto from "../../../assets/photos/SecondPhoto.png"
import thirdPhoto from "../../../assets/photos/ThirdPhoto.png"
import imgDelete from "../../../assets/icons/icon-img-delete.svg"

export const PhotosBlock = () => {
  return (
    <div className={styles.blockPhotos}>
      <div className={styles.blockHeader}>
        <h3 className={styles.blockTitle}>Photos</h3>
        <button className={styles.textIconButton}>
          <img src={iconPencil} alt="Pencil" className={styles.buttonIcon} />
          <span>Add</span>
        </button>
      </div>

      <div className={styles.photosContainer}>
        <div className={styles.photoWrapper}>
          <img
            src={firstPhoto}
            alt="photo"
            className={styles.photoPlaceholder}
          />
          <img src={imgDelete} alt="Delete" className={styles.deleteIcon} />
        </div>

        <div className={styles.photoWrapper}>
          <img
            src={secondPhoto}
            alt="photo"
            className={styles.photoPlaceholder}
          />
          <img src={imgDelete} alt="Delete" className={styles.deleteIcon} />
        </div>

        <div className={styles.photoWrapper}>
          <img
            src={thirdPhoto}
            alt="photo"
            className={styles.photoPlaceholder}
          />
          <img src={imgDelete} alt="Delete" className={styles.deleteIcon} />
        </div>
      </div>
    </div>
  )
}
