import React, { ReactNode } from 'react'
import cx from 'classnames'
import {Button, ButtonProps} from '@components/common/Button/Button'

export type SelectButtonProps = {
  classes?: string
  title?: ReactNode | string
  desc?: ReactNode | string
  children?: ReactNode | string
}
export const SelectButton = (
  {
    classes = '',
    title = '선택형',
    desc,
    children,
    ...props
  }: SelectButtonProps & ButtonProps) => {

  return (
    <Button
      classes={['-solid -info', classes]}
      isSelect={true}
      {...props}
    >
      {title && <p className={cx('ui-button-title', desc && 'fw-700' )}>{title}</p>}
      {desc && <p className="ui-button-desc">{desc}</p>}
      {children}
    </Button>
  )
}