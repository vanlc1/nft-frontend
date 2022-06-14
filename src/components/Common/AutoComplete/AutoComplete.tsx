import { useState } from 'react'

import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import { AutoCompleteProps, AutoCompleteItemProps } from './AutoComplete.types'
import { Box } from '@chakra-ui/layout'

import useStyles, {
  tagProps,
  inputProps,
  listStyleProps,
  labelProps,
} from './AutoComplete.styles'

export const AutoComplete = (props: AutoCompleteProps) => {
  const {
    items,
    defaultSelectedItems,
    onChange,
    placeholder,
    customInput,
    isMultiple,
    customFilter,
  } = props
  const styles = useStyles()
  const [selected, setSelected] =
    useState<AutoCompleteItemProps[]>(defaultSelectedItems)

  const handleSelectedItemsChange = (
    selectedItems: AutoCompleteItemProps[] | undefined
  ) => {
    if (selectedItems) {
      if (isMultiple) {
        setSelected(selectedItems)
      }
      onChange(selectedItems)
    }
  }

  return (
    <Box position="relative" __css={styles.autocomplete}>
      <CUIAutoComplete
        label={''}
        tagStyleProps={tagProps}
        inputStyleProps={inputProps}
        listStyleProps={listStyleProps}
        disableCreateItem={true}
        labelStyleProps={labelProps}
        placeholder={placeholder}
        hideToggleButton={true}
        items={items}
        optionFilterFunc={customFilter}
        renderCustomInput={customInput}
        selectedItems={selected}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes?.selectedItems)
        }
      />
    </Box>
  )
}

AutoComplete.defaultProps = {
  placeholder: '',
  isMultiSelect: false,
}
