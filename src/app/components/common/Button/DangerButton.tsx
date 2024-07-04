import React, {ReactNode} from 'react'
import {Button, ButtonProps} from '@components/common/Button/Button'

export type DangerButtonProps = {
  classes?: string
  children?: ReactNode | string
}
export const DangerButton = (
  {
    classes = '',
    children,
    ...props
  }: DangerButtonProps & ButtonProps) => {

  return (
    <Button
      classes={['-solid -danger', classes]}
      {...props}
    >
      {children}
    </Button>
  )
}