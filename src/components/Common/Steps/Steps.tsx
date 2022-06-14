import { Fragment } from 'react'

import { Step, Steps as BaseSteps } from 'chakra-ui-steps'

import useStyles from './Steps.styles'
import { StepsProps } from './Step.types'

const DEFAULT_STEP = 0

export const Steps = (props: StepsProps) => {
  const { steps, currentStep, children, labelOrientation } = props

  const styles = useStyles()
  return (
    <Fragment>
      <BaseSteps
        labelOrientation={labelOrientation}
        activeStep={currentStep}
        responsive
        __css={styles.stepItem}
        mb="24px"
      >
        {steps &&
          steps.map(({ label }) => (
            <Step label={label} key={label} isCompletedStep={false}>
              {children}
            </Step>
          ))}
      </BaseSteps>
    </Fragment>
  )
}

Steps.defaultProps = {
  labelOrientation: 'vertical',
  currentStep: DEFAULT_STEP,
}
