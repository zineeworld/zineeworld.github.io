import React from 'react'
import cx from "classnames"

export type IconProps = {
  classes?: string
}
export const IconBack = (
  {
    classes
  }: IconProps) => {
  return (
      <svg
          className={cx('ui-icon', classes)}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd"
              d="M8.4062 8.31664C8.82839 8.73883 8.82839 9.42333 8.4062 9.84552L2.25172 16L8.4062 22.1545C8.82839 22.5767 8.82839 23.2612 8.4062 23.6834C7.98401 24.1055 7.29951 24.1055 6.87732 23.6834L0.569954 17.376C-0.189985 16.6161 -0.189985 15.3839 0.569954 14.624L6.87732 8.31664C7.29951 7.89445 7.98401 7.89445 8.4062 8.31664Z"
              fill="#222222" />
      </svg>
  )
}
