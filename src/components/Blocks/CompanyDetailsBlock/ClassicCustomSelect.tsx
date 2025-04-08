import { useState, useRef, useEffect } from "react"
import styles from "./CompanyDetailsBlock.module.scss"

interface ClassicSelectProps {
  options: string[]
  selectedOption: string
  onSelect: (selected: string) => void
}

export const ClassicCustomSelect = ({
  options,
  selectedOption,
  onSelect,
}: ClassicSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.customSelectContainer} ref={selectRef}>
      <div
        className={styles.customSelectHeader}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        {selectedOption || "Select an option..."}
        <span
          className={`${styles.selectArrow} ${isOpen ? styles.rotated : ""}`}
        />
      </div>
      {isOpen && (
        <div className={styles.customSelectDropdown}>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.customSelectOptionClassic} ${
                selectedOption === option ? styles.selected : ""
              }`}
              onClick={() => {
                onSelect(option)
                setIsOpen(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
