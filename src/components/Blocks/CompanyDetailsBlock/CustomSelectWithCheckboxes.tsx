import { useState, useRef, useEffect } from "react"
import styles from "./CompanyDetailsBlock.module.scss"

interface CustomSelectProps {
  options: string[]
  selectedOptions: string[]
  onSelectionChange: (selected: string[]) => void
}

export const CustomSelectWithCheckboxes = ({
  options,
  selectedOptions,
  onSelectionChange,
}: CustomSelectProps) => {
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

  const toggleOption = (option: string) => {
    const newSelected = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option]
    onSelectionChange(newSelected)
  }

  return (
    <div className={styles.customSelectContainer} ref={selectRef}>
      <div
        className={styles.customSelectHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select options..."}
      </div>
      {isOpen && (
        <div className={styles.customSelectDropdown}>
          {options.map((option) => (
            <label key={option} className={styles.customSelectOption}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}
