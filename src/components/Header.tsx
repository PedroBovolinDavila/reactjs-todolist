import logo from '../assets/logo.svg'
import { Button } from './Button'

import styles from './Header.module.css'
import { Input } from './Input'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="" />

      <div className={styles.inputContainer}>
        <Input />
        <Button title="Criar" />
      </div>
    </header>
  )
}
