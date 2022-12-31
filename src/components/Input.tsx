import { ComponentProps } from 'react'
import styles from './Input.module.css'

interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
  return (
    <input
      className={styles.inputContainer}
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  )
}
