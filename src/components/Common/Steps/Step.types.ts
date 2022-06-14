import { HTMLAttributes, PropsWithChildren } from 'react'

export interface StepProps {
  label: string
  icon?: JSX.Element
}

export interface StepsProps
  extends PropsWithChildren<HTMLAttributes<StepProps>> {
  steps: StepProps[]
  currentStep: number
  labelOrientation?: 'vertical' | 'horizontal'
}
