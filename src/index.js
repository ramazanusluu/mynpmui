import React from 'react'
import styles from './styles.module.css'

export const Button = (type) => {
  switch (type.type) {
    case 'primary':
      return (
        <button {...type} className={styles.primary}>
          {type.text}
        </button>
      )
    case 'dashed':
      return (
        <button {...type} className={styles.dashed}>
          {type.text}
        </button>
      )
    case 'text':
      return (
        <button {...type} className={styles.text}>
          {type.text}
        </button>
      )
    case 'link':
      return (
        <button {...type} className={styles.link}>
          {type.text}
        </button>
      )
    default:
      return (
        <button {...type} className={styles.default}>
          {type.text}
        </button>
      )
  }
}
