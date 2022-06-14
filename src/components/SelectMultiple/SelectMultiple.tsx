import { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/layout'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'

import { ICheckBoxChecked, ICheckBoxUnchecked } from 'components'

import { SelectMultipleProps } from './SelectMultiple.types'
import useStyles from './SelectMultiple.styles'

export interface InterfaceValueLabel {
  value: string
  label: string
}

export const SelectMultiple = (props: SelectMultipleProps) => {
  const {
    placeholder,
    options,
    selections,
    setSelections,
    buttonStyle,
    expandStyle,
    ...rest
  } = props
  const selectionList = selections.map((item) => item.value)
  const optionList = options.map((item) => item.value)
  const valueAll = 'all'
  const [tempSelections, setTempSelections] = useState(selectionList)
  const [newFilterInstance, setNewFilterInstance] = useState(true)
  const styles = useStyles()

  const handleOptionClick = (e: any) => {
    const clickedOption = e.target.value
    if (tempSelections.includes(clickedOption)) {
      clickedOption === valueAll
        ? setTempSelections([])
        : setTempSelections([
            ...tempSelections.filter(
              (x) => x !== clickedOption && x !== valueAll
            ),
          ])
    } else {
      clickedOption === valueAll ||
      tempSelections.length + 1 === optionList.length - 1
        ? setTempSelections([...optionList])
        : setTempSelections([...tempSelections, clickedOption])
    }
  }

  const handleApplyClick = () => {
    setSelections(options.filter((item) => tempSelections.includes(item.value)))
    setNewFilterInstance(false)
  }

  useEffect(() => {
    setNewFilterInstance(true)
  }, [newFilterInstance])

  return (
    <Box {...rest}>
      {newFilterInstance && (
        <Accordion allowToggle>
          <AccordionItem padding="0px" border="none" position="relative">
            <Box
              as={AccordionButton}
              width="100%"
              display="flex"
              flexFlow="row nowrap"
              justifyContent="space-between"
              alignItems="center"
              __css={buttonStyle}
            >
              {placeholder}
              <AccordionIcon />
            </Box>
            <Box as={AccordionPanel} __css={expandStyle}>
              {options.map((option, index) => (
                <Box
                  as="button"
                  __css={styles.filterOption}
                  onClick={handleOptionClick}
                  value={option.value}
                  key={index}
                >
                  <Box __css={styles.checkBox}>
                    {(tempSelections.includes(option.value) && (
                      <ICheckBoxChecked />
                    )) || <ICheckBoxUnchecked />}
                  </Box>
                  <Box pointerEvents="none">{option.label}</Box>
                </Box>
              ))}
              <Box
                as="button"
                __css={styles.applyButton}
                onClick={handleApplyClick}
              >
                Apply
              </Box>
            </Box>
          </AccordionItem>
        </Accordion>
      )}
    </Box>
  )
}
