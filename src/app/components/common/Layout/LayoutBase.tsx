"use client";

import React, {ReactNode} from 'react'
import cx from 'classnames'
import { Cursor } from '../Cursor/Cursor';

export type LayoutBaseProps = {
  children?: ReactNode
}

export const LayoutBase = (
  {
    children
  }: LayoutBaseProps) => {

  return (
    <div className={cx('ui-container')}>
      <div className="ui-content">
        {children}
      </div>
      <Cursor />
    </div>
  )
}