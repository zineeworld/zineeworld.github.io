import React, {ReactNode} from 'react'
import cx from 'classnames'
import Image from 'next/image'
import loaderUrl from '@assets/images/finnq_loading_spinner.gif'

export type LayoutLoadingProps = {
  title?: string | ReactNode
  desc?: string | ReactNode
  showLoader?: boolean
}

export const LayoutLoading = (
  {
    title,
    desc,
    showLoader = false,
  }: LayoutLoadingProps) => {

  return (
    <div className={cx('ui-container-loading')}>
      <div className="ui-content">
        {title && <h1 className="page-title">{title}</h1>}
        {desc && <p className="page-desc">{desc}</p>}
        {showLoader && 
          <Image 
            className="mt16"
            src={loaderUrl}
            alt="로더" 
            width="40"
            height="40"
          /> 
        }
      </div>
    </div>
  )
}