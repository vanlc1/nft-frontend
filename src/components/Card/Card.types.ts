import { HTMLAttributes, PropsWithChildren } from 'react'

export interface CardProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  title: string
  variant?: string
  width?: number
  height?: number
  titleFontSize?: string
  withDivider?: boolean
  padding?: string
  borderRadius?: string
  titleLineHeight?: string
  marginBottom?: string
}
