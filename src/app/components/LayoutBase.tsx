import React, {ReactNode} from 'react'
import cx from 'classnames'

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
    </div>
  )
}