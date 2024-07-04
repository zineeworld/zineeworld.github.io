import React, { ReactNode } from 'react'
import cx from 'classnames'
import {IconChevron} from "../Icons/IconChevron";

export type TextButtonProps = {
  classes?: string
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  color?: 'gray1' | 'gray2' |'gray3' | 'point1' | 'point2'
  isArrowDown?: boolean
  isMedium?: boolean  // font-weight
  disabled?: boolean
  children?: ReactNode | string
  onClick?: () => void
}

export const TextButton = (
  {
    classes,
    size = 'large',
    color = 'gray2',
    isArrowDown = false,
    isMedium = false,
    disabled = false,
    children = '텍스트 버튼',
  }: TextButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        'ui-button -text',
        `-${size}`,
        `-${color}`,
        {'fw-500' : isMedium},
        classes,
      )}
      disabled={disabled}
      onClick={() => {}}
    >
      { children }
      <IconChevron
        type={size === 'xlarge' ? 'bold' : 'normal'}
        direction={isArrowDown ? 'down' : 'right' }
      />
    </button>
  )
}