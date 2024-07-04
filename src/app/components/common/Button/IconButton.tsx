import React, {ReactNode} from 'react'
import {Button, ButtonProps} from "@components/common/Button/Button";

export type IconButtonProps = {
  classes?: string
  children?: ReactNode
}

export const IconButton = (
  {
    classes = '',
    children,
    ...props
  }: IconButtonProps & ButtonProps) => {


  return (
    <Button
      classes={['-ghost -only-icon', classes]}
      size="xsmall"
      {...props}
    >
      { children }
    </Button>
  )
}