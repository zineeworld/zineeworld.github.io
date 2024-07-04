import React, {ReactNode} from 'react'
import {Button, ButtonProps} from '@components/common/Button/Button'

export type LineButtonProps = {
  classes?: string
  children?: ReactNode | string
}
export const LineButton = (
  {
    classes = '',
    children,
    ...props
  }: LineButtonProps & ButtonProps) => {

  return (
    <Button
      classes={['-line -default', classes]}
      {...props}
    >
      {children}
    </Button>
  )
}