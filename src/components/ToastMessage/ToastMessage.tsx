import { createStandaloneToast, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { baseTheme } from 'themes'
import { ToastProps } from './ToastMessage.type'

export const ToastMessage = (props: ToastProps) => {
  const { ToastContainer, toast } = createStandaloneToast({ theme: baseTheme })
  const { displayToast, title, isClosable, position, duration, status } = props
  useEffect(() => {
    if (displayToast) {
      toast({
        // id,
        title,
        isClosable,
        position,
        duration,
        status,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayToast])

  return (
    <VStack>
      <ToastContainer />
    </VStack>
  )
}
