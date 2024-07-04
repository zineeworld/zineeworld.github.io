import React, { ReactNode } from 'react'
import cx from 'classnames'

export type ButtonGroupProps = {
  classes?: string
  isColumn?: boolean
  isFitted?: boolean
  isSelect?: boolean
  gap?: number
  children: ReactNode
}

export const ButtonGroup = (
  {
    classes,
    isColumn = false,
    isFitted = false,
    isSelect = false,
    gap,
    children,
  }: ButtonGroupProps) => {
  const buttonGap = (gap: number | undefined) => {
    if (gap !== undefined) return { gap: `${gap}px` }
  }
  return (
    <div
      className={cx(
        classes,
        'ui-button-group',
        {'-column': isColumn},
        {'-fitted': isFitted},
        {'-select': isSelect}
      )}
      style={buttonGap(gap)}
    >
      {children}
    </div>
  )
}