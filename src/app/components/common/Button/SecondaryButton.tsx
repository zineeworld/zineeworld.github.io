import React, {ReactNode} from 'react'
import {Button, ButtonProps} from '@components/common/Button/Button'

export type SecondaryButtonProps = {
  classes?: string
  children?: ReactNode | string
}
export const SecondaryButton = (
  {
    classes = '',
    children,
    ...props
  }: SecondaryButtonProps & ButtonProps) => {

  return (
    <Button
      classes={['-solid -secondary', classes]}
      {...props}
    >
      {children}
    </Button>
  )
}