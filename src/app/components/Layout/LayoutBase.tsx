"use client";

import React, {ReactNode} from 'react'
import cx from 'classnames'
import { IconBack } from '../Icons/IconBack';

export type LayoutBaseProps = {
  type?: String
  date?: String
  children?: ReactNode
}

export const LayoutBase = (
  {
    type,
    date,
    children,
  }: LayoutBaseProps) => {

  const handleGoBack = () => {
    history.back();
  };

  return (
    <div className={cx('ui-container', `ui-${type}`)}>
      <div className="ui-header-area">
        <div className="ui-header">
          <button onClick={handleGoBack}>
            <IconBack />
          </button>
        </div>
      </div>

      <div className="ui-content">
        { date && <span className="ui-label -secondary">{ date }</span>}
        {children}
      </div>
    </div>
  )
}