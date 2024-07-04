import React, {ReactNode} from 'react'
import {Button, ButtonProps} from '@components/common/Button/Button'

export type PrimaryButtonProps = {
  classes?: string
  children?: ReactNode | string
}
export const PrimaryButton = (
  {
    classes = '',
    children,
    ...props
  }: PrimaryButtonProps & ButtonProps) => {

  return (
    <Button
      classes={['-solid -primary', classes]}
      {...props}
    >
      {children}
    </Button>
  )
}