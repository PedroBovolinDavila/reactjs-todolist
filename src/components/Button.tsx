import { ComponentProps } from 'react'
import styles from './Button.module.css'

import plusIcon from '../assets/plus.svg'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button className={styles.buttonContainer} {...rest}>
      {title}
      <img src={plusIcon} alt="" />
    </button>
  )
}
