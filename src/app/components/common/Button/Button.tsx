import React, { ReactNode, useEffect, useState, MouseEvent } from 'react'
import cx from 'classnames'
import {useDebounceFn} from '@hooks/useDebounceFn'
import {useThrottleFn} from '@hooks/useThrottleFn'
import {Loader} from "@components/common/Loader/Loader";

export type ButtonProps = {
  classes?: string | Array<string>
  type?: 'button' | 'submit' | 'reset'
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
  isFullWidth?: boolean
  isOnlyIcon?: boolean
  inProgress?: boolean
  inProgressDelay?: number
  ratio?: number
  autofocus?: boolean
  disabled?: boolean
  isLater?: boolean
  isSelect?: boolean
  children?: ReactNode | string
  /** 부모 엘리먼트에게 이벤트가 전파 되는것을 막습니다. 기본값: true */
  stopPropagation?: boolean
  /** debounce 시간동안 연속된 클릭/터치 이벤트는 무시하고, 마지막 이벤트에만 반응합니다. 기본값: 0 */
  debounce?: number
  /** throttle 시간동안 연속된 클릭/터치 이벤트가 발생해도 1번만 실제 이벤트를 발생시킵니다. 기본값: 300 */
  throttle?: number
  onClick?: (e: MouseEvent) => void
}

export const Button = (
  {
    classes,
    type = 'button',
    size = 'large',
    isFullWidth = false,
    isOnlyIcon = false,
    inProgress = false,
    inProgressDelay = 250,
    ratio = 0,
    autofocus = false,
    disabled = false,
    isLater = false,
    isSelect = false,
    children = 'Button',
    stopPropagation = true,
    throttle = 300,
    onClick = () => {},
    ...props
  }: ButtonProps) => {
  const [isInProgress, setIsInProgress] = useState<boolean>(inProgress)

  const computedSize = () => {
    if (isLater)
      return 'btn-later'
    else if (isSelect)
      return 'btn-select'
    else
      return `-${size}`
  }

  const buttonClassNames = cx(
    'ui-button',
    computedSize(),
    {'-in-progress': isInProgress},
    {'-full-width': isFullWidth},
    {'-only-icon': isOnlyIcon},
    classes,
  )

  const buttonStyles = () => {
    if (ratio !== 0)
      return { flexGrow: ratio }
  }

  const debouncedSetIsInProgress = useDebounceFn(setIsInProgress, inProgressDelay)
  const throttledClick = useThrottleFn<MouseEvent>(onClick, throttle)
  const stopPropagationHandler = (e: MouseEvent) => {
    if (stopPropagation) e.stopPropagation()
  }

  const onClickHandler = (e: MouseEvent) => {
    stopPropagationHandler(e)
    throttledClick(e)
  }

  useEffect(() => {
    if (inProgress) {
      debouncedSetIsInProgress(inProgress)
    } else {
      setIsInProgress(inProgress)
    }
  }, [inProgress])

  return (
    <button
      type={type}
      className={buttonClassNames}
      {...props}
      autoFocus={autofocus}
      disabled={disabled}
      style={buttonStyles()}
      onClick={onClickHandler}
    >
      { isInProgress
        ? <Loader size={20}/>
        : children
      }
    </button>
  )
}