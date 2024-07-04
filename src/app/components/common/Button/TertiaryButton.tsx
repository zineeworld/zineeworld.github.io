import React, {ReactNode} from 'react'
import {Button, ButtonProps} from '@components/common/Button/Button'

export type TertiaryButtonProps = {
  classes?: string
  children?: ReactNode | string
}
export const TertiaryButton = (
  {
    classes = '',
    children,
    ...props
  }: TertiaryButtonProps & ButtonProps) => {

  return (
    <Button
      classes={['-solid -tertiary', classes]}
      {...props}
    >
      {children}
    </Button>
  )
}