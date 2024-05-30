'use client'

import classNames from 'classnames'
import styles from './Card.module.css'

// Props Interface
// Extends Reacts.ComponentPropsWithoutRef for 'div' but you
// can replace that with whatever if you need to do rest
// props, or remove if you don't need them.
interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
  className?: string
  // ADD YOUR NEW PROPS HERE
}

function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div className={classNames(styles.card, className)} {...rest}>
      {children}
    </div>
  )
}

export default Card
